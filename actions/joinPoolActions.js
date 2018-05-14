/* eslint-disable import/prefer-default-export */
import _ from 'lodash';
import { actionTypes } from '../actions/types';
import getContestPoolInstance from '../ethereum/contestPool';
import web3 from '../ethereum/web3';

const isNotUndefined = value => !(_.isUndefined(value));

export const joinPool = (pool, predictions) => dispatch =>
  new Promise(async (resolve, reject) => {
    try {
      dispatch({ type: actionTypes.JOIN_POOL_REQUEST });
      if (!pool.address) {
        throw new Error('System Error: Expected a valid address');
      }
      console.log('Predictions: ', predictions);
      const poolInstance = await getContestPoolInstance(pool.address);
      const accounts = await web3.eth.getAccounts();
      const tx = await poolInstance.methods
        .sendPredictionSet(predictions)
        .send({
          from: accounts[0],
          value: pool.amountPerPlayer,
        });
      dispatch({ type: actionTypes.JOIN_POOL_SUCCESS, payload: tx });
      resolve(tx);
    } catch (error) {
      dispatch({ type: actionTypes.JOIN_POOL_FAIL, payload: error });
      reject(error);
    }
  });

