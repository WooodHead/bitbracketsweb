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

export const loadPoolParticipants = address => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_POOL_PARTICIPANTS_REQUEST });

  axios.get(`${API_BASE_URL}/pools/${address}`)
    .then(pool => dispatch({
      type: actionTypes.FETCH_POOL_PARTICIPANTS_SUCCESS,
      payload: pool.players,
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
      const manager = poolInstance.methods.manager().call();
      const name = poolInstance.methods.name().call();
      const contestName = poolInstance.methods.contestName().call();
      const startTime = poolInstance.methods.startTime().call();
      const endTime = poolInstance.methods.endTime().call();
      const amountPerPlayer = poolInstance.methods.amountPerPlayer().call();
      const players = poolInstance.methods.players().call();
      const managerFee = poolInstance.methods.managerFee().call();
      const fee = poolInstance.methods.ownerFee().call();
      const amountPaid = poolInstance.methods.amountPaid().call();
      const highScore = poolInstance.methods.highestScore().call();
      const winners = poolInstance.methods.getWinners().call();
      const totalBalance = web3.eth.getBalance(address);
      const res = await Promise.all([
        manager,
        name,
        contestName,
        startTime,
        endTime,
        amountPerPlayer,
        players,
        managerFee,
        fee,
        amountPaid,
        highScore,
        winners,
        totalBalance,
      ]);

      const pool = {
        manager: res[0],
        name: web3.utils.hexToString(res[1]),
        contestName: web3.utils.hexToString(res[2]),
        startTime: res[3],
        endTime: res[4],
        amountPerPlayer: web3.utils.fromWei(res[5], 'ether'),
        players: res[6],
        managerFee: res[7],
        fee: res[8],
        amountPaid: web3.utils.fromWei(res[9], 'ether'),
        highScore: res[10],
        winners: res[11],
        totalBalance: res[12],
        address,
      };
      const balanceEntries = (pool.amountPerPlayer * pool.players);
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

