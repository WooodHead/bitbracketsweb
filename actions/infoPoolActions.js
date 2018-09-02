/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { actionTypes } from '../actions/types';
import getContestPoolInstance from '../ethereum/contestPool';
import web3 from '../ethereum/web3';

const API_BASE_URL = process.env.ENDPOINT_URL;

// function stringToBytes32(text) {
//   return util.bufferToHex(util.setLengthRight(text, 32));
// }

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const loadPoolParticipants = address => dispatch => {
  dispatch({ type: actionTypes.FETCH_POOL_PARTICIPANTS_REQUEST });

  axios
    .get(`${API_BASE_URL}/pools/${address}`)
    .then(res =>
      dispatch({
        type: actionTypes.FETCH_POOL_PARTICIPANTS_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({ type: actionTypes.FETCH_POOL_PARTICIPANTS_FAIL, payload: err })
    );
};

export const getPoolDetails = address => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch({ type: actionTypes.FETCH_POOL_REQUEST });

    try {
      if (!web3.utils.checkAddressChecksum(address)) {
        throw new Error('Error: Invalid address provided');
      }
      const poolInstance = await getContestPoolInstance(address);
      const contestDetails = await poolInstance.methods
        .getContestDetails()
        .call();
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
      const highScore = contestDetails[12];

      const winners = poolInstance.methods.getWinners().call();
      const totalBalance = poolInstance.methods.getPoolBalance().call();
      const contractBalance = web3.eth.getBalance(address);
      const res = await Promise.all([winners, totalBalance, contractBalance]);

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
        highScore: highScore,
        winners: res[0],
        totalBalance: res[1],
        totalBalanceEth: web3.utils.fromWei(res[1], 'ether'),
        address,
        maxBalance,
        maxBalanceEth: web3.utils.fromWei(maxBalance, 'ether')
      };
      const balanceEntries = pool.amountPerPlayer * pool.numPlayers;
      const feeTotal = balanceEntries * (pool.fee / 100);
      const managerTotal = balanceEntries * (pool.managerFee / 100);
      pool.priceTotal = 100 - managerFee - fee;
      pool.priceBalance = Number(
        balanceEntries - feeTotal - managerTotal - pool.amountPaid
      ).toFixed(8);
      pool.managerTotal = Number(managerTotal).toFixed(8);
      pool.ownerTotal = Number(feeTotal).toFixed(8);
      pool.maxPlayers = maxBalance / amountPerPlayer;
      dispatch({ type: actionTypes.FETCH_POOL_SUCCESS, payload: pool });
      resolve(pool);
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_POOL_FAIL, payload: error });
      reject(error);
    }
  });
