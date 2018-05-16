/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import CONF from '../conf';
import { actionTypes } from '../actions/types';
import getContestPoolInstance from '../ethereum/contestPool';
import web3 from '../ethereum/web3';

const API_BASE_URL = CONF.endpoint.url;

// function stringToBytes32(text) {
//   return util.bufferToHex(util.setLengthRight(text, 32));
// }

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const loadPoolParticipants = address => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_POOL_PARTICIPANTS_REQUEST });

  axios.get(`${API_BASE_URL}/pools/${address}`)
    .then(res => dispatch({
      type: actionTypes.FETCH_POOL_PARTICIPANTS_SUCCESS,
      payload: res.data,
    }))
    .catch(err => dispatch({ type: actionTypes.FETCH_POOL_PARTICIPANTS_FAIL, payload: err }));
};

export const getPoolDetails = address => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch({ type: actionTypes.FETCH_POOL_REQUEST });

    try {
      if (!web3.utils.checkAddressChecksum(address)) {
        throw new Error('Error: Invalid address provided');
      }
      const poolInstance = await getContestPoolInstance(address);
      const contestDetails = await poolInstance.methods.getContestDetails().call();
      console.log(contestDetails);

      const manager = contestDetails[0];
      const name = contestDetails[1];
      const contestName = contestDetails[2];
      const startTime = contestDetails[3];
      const endTime = contestDetails[4];
      const graceTime = contestDetails[5];
      const numPlayers = contestDetails[6];
      const amountPerPlayer = contestDetails[7];
      const maxBalance = contestDetails[8];
      const fee = contestDetails[9];
      const managerFee = contestDetails[10];
      const amountPaid = contestDetails[11];

      const highScore = 0;//poolInstance.methods.highestScore().call();
      const winners = poolInstance.methods.getWinners().call();
      const totalBalance = web3.eth.getBalance(address);
      const res = await Promise.all([
        highScore,
        winners,
        totalBalance,
      ]);

      const pool = {
        manager,
        name: web3.utils.hexToString(name),
        contestName: web3.utils.hexToString(contestName),
        startTime: startTime,
        endTime: endTime,
        amountPerPlayer: web3.utils.fromWei(amountPerPlayer, 'ether'),
        numPlayers: numPlayers,
        managerFee: managerFee,
        fee: fee,
        amountPaid: web3.utils.fromWei(amountPaid, 'ether'),
        highScore: res[0],
        winners: res[1],
        totalBalance: res[2],
        address,
      };
      const balanceEntries = (pool.amountPerPlayer * pool.numPlayers);
      const feeTotal = balanceEntries * (pool.fee / 100);
      const managerTotal = balanceEntries * (pool.managerFee / 100);
      pool.priceBalance = balanceEntries - feeTotal - managerTotal - pool.amountPaid;
      dispatch({ type: actionTypes.FETCH_POOL_SUCCESS, payload: pool });
      resolve(pool);
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_POOL_FAIL, payload: error });
      reject(error);
    }
  });

