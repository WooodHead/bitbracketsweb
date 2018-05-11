import util from 'ethereumjs-util';
import _ from 'lodash';
import CONF from '../conf';
import { actionTypes } from '../actions/types';
import getContestPoolInstance from '../ethereum/contestPool';
import web3 from '../ethereum/web3';

const API_BASE_URL = CONF.endpoint.url;

function stringToBytes32(text) {
  return util.bufferToHex(util.setLengthRight(text, 32));
}

const getPoolDetails = address => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch({ type: actionTypes.POOL_DETAIL_REQUEST });

    try {
      console.info('Fetching pool info', address);
      const poolInstance = getContestPoolInstance(address);
      const manager = poolInstance.methods.manager().call();

      const res = await Promise.all([manager]);

      // console.log('poolName', stringToBytes32(poolName));
      // console.log('poolName ascii to hex', web3.utils.stringToHex(poolName));
      // console.log('contestName', stringToBytes32(contestName));
      // console.log('contestName ascii to hex', web3.utils.stringToHex(contestName));
      // console.log('res', res);
      const pool = {
        manager: res[0],
      };
      console.log('pool info: ', pool);
      dispatch({ type: actionTypes.POOL_DETAIL_SUCCESS, payload: pool });
      resolve(pool);
    } catch (error) {
      dispatch({ type: actionTypes.POOL_DETAIL_FAILED, payload: error });
      reject(error);
    }
  });


export default {
  getPoolDetails,
};
