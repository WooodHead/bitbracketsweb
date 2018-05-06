import CONF from '../conf';
import { actionTypes } from '../actions/types';
import factory from '../ethereum/contestPoolFactory';
import web3 from '../ethereum/web3';

const API_BASE_URL = CONF.endpoint.url;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const createPool = pool => dispatch =>
  new Promise(async (resolve, reject) => {
    // await delay(5000);
    dispatch({ type: actionTypes.CREATE_POOL_REQUEST });
    try {
      console.info('CreatePool state', pool);
      const { poolName, contestName, entryPrice } = pool;
      const accounts = await web3.eth.getAccounts();
      console.log('poolName', web3.utils.asciiToHex(poolName));
      console.log('contestName', web3.utils.asciiToHex(contestName));
      const tx = await factory.methods
        .createContestPool(
          web3.utils.asciiToHex(poolName),
          web3.utils.asciiToHex(contestName),
          web3.utils.toWei(entryPrice, 'ether'),
        )
        .send({
          from: accounts[0],
          value: web3.utils.toWei(pool.fee, 'wei'),
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
