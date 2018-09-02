import util from 'ethereumjs-util';
import _ from 'lodash';
import { actionTypes } from '../actions/types';
import factory from '../ethereum/contestPoolFactory';
import web3 from '../ethereum/web3';

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
      /*
      console.log('poolName', poolName);
      console.log('poolName bytes32', stringToBytes32(poolName));
      console.log('poolName ascii to hex', web3.utils.stringToHex(poolName));
      console.log('contestName', stringToBytes32(contestName));
      console.log('contestName ascii to hex', web3.utils.stringToHex(contestName));
      console.log('Amount per player', entryPrice);
      console.log('ContestPool', contestName);
      console.log('Account', accounts[0]);
      */

      const tx = await factory.methods
        .createContestPool(
          stringToBytes32(poolName),
          stringToBytes32(contestName),
          web3.utils.toWei(entryPrice, 'ether')
        )
        .send({
          from: accounts[0],
          value: pool.fee
        });
      const poolAddress = _.get(
        tx,
        'events.ContestPoolCreated.returnValues.contestPoolAddress'
      );
      console.log('poolAddress', poolAddress);
      if (poolAddress) {
        dispatch({ type: actionTypes.CREATE_POOL_SUCCESS, payload: tx });
        resolve(poolAddress);
      } else {
        const error = Error('Unexpected error while creating ContestPool');
        dispatch({ type: actionTypes.CREATE_POOL_FAILED, payload: error });
        reject(error);
      }
    } catch (error) {
      dispatch({ type: actionTypes.CREATE_POOL_FAILED, payload: error });
      reject(error);
    }
  });

// this should be named fetchContestDetails
export const fetchPoolDetails = pool => async dispatch => {
  dispatch({ type: actionTypes.POOL_DETAIL_REQUEST });
  // await delay(500);
  dispatch({ type: actionTypes.POOL_DETAIL_SUCCESS, payload: pool });
};

// TODO: NOTE: does not work yet
export const fetchPoolDefinition = pool => dispatch =>
  new Promise(async (resolve, reject) => {
    // await delay(5000);
    dispatch({ type: actionTypes.POOL_DETAIL_REQUEST });
    try {
      console.info('CreatePool state', pool);
      const { poolName, contestName } = pool;
      // const accounts = await web3.eth.getAccounts();
      console.log('poolName', stringToBytes32(poolName));
      console.log('poolName ascii to hex', web3.utils.stringToHex(poolName));
      console.log('contestName', stringToBytes32(contestName));
      console.log(
        'contestName ascii to hex',
        web3.utils.stringToHex(contestName)
      );
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
