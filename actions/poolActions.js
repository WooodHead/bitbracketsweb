import util from 'ethereumjs-util';
import CONF from '../conf';
import { actionTypes } from '../actions/types';
import factory from '../ethereum/contestPoolFactory';
import web3 from '../ethereum/web3';

const API_BASE_URL = CONF.endpoint.url;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function stringToBytes32(text) {
  return util.bufferToHex(util.setLengthRight(text, 32));
}

export const createPool = pool => dispatch =>
  new Promise(async (resolve, reject) => {
    // await delay(5000);
    dispatch({ type: actionTypes.CREATE_POOL_REQUEST });
    try {
      // el definition Rusia2018Prueba dice que este es el fee en wei
      // pool.fee = '10000000000000000';
      console.info('CreatePool state', pool);
      const { poolName, contestName, entryPrice } = pool;
      const accounts = await web3.eth.getAccounts();
      console.log('poolName', poolName);
      console.log('poolName bytes32', stringToBytes32(poolName));
      console.log('poolName ascii to hex', web3.utils.stringToHex(poolName));
      console.log('contestName', stringToBytes32(contestName));
      console.log('contestName ascii to hex', web3.utils.stringToHex(contestName));
      console.log('Amount per player', entryPrice);
      console.log('ContestPool', contestName);
      console.log('Account', accounts[0]);
/*
Contest Name: Rusia2018Test11
0: bytes32: contestName 0x5275736961323031385465737431310000000000000000000000000000000000
1: uint256: startTime 1527811200
2: uint256: endTime 1530403200
3: uint256: graceTime 345600
4: uint256: maxBalance 10000000000000000000
5: uint256: fee 10000000000000000
6: bool: exists true
7: uint256: ownerFee 10
8: uint256: managerFee 10
9: bool: enabled true

*/

      const tx = await factory.methods
        .createContestPool(
          stringToBytes32(poolName),
          stringToBytes32('Rusia2018Test11'),
          //web3.utils.toWei(entryPrice, 'ether')
          '10000000000000000'
        )
        .send({
          from: accounts[0],
          value: '10000000000000000'
        });
      console.log('tx', tx);
      dispatch({ type: actionTypes.CREATE_POOL_SUCCESS, payload: tx });
      resolve(tx);
    } catch (error) {
      dispatch({ type: actionTypes.CREATE_POOL_FAILED, payload: error });
      reject(error);
    }
  });

export const fetchPoolDetails = pool => async (dispatch) => {
  dispatch({ type: actionTypes.POOL_DETAIL_REQUEST });
  await delay(500);
  dispatch({ type: actionTypes.POOL_DETAIL_SUCCESS, payload: pool });
};

export const fetchPoolDefinition = pool => dispatch =>
  new Promise(async (resolve, reject) => {
    // await delay(5000);
    dispatch({ type: actionTypes.POOL_DETAIL_REQUEST });
    try {
      // el definition Rusia2018Prueba dice que este es el fee en wei
      // pool.fee = '10000000000000000';
      console.info('CreatePool state', pool);
      const { poolName, contestName } = pool;
      // const accounts = await web3.eth.getAccounts();
      console.log('poolName', stringToBytes32(poolName));
      console.log('poolName ascii to hex', web3.utils.stringToHex(poolName));
      console.log('contestName', stringToBytes32(contestName));
      console.log('contestName ascii to hex', web3.utils.stringToHex(contestName));
      const res = await factory.methods
        .definitions(stringToBytes32(contestName))
        .call();
      console.log('res', res);
      dispatch({ type: actionTypes.POOL_DETAIL_SUCCESS, payload: pool });
      resolve(res);
    } catch (error) {
      dispatch({ type: actionTypes.POOL_DETAIL_FAILED, payload: error });
      reject(error);
    }
  });
