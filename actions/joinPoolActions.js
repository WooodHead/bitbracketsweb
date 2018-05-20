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
      
      const poolInstance = await getContestPoolInstance(pool.address);
      const accounts = await web3.eth.getAccounts();
      const amountPerPlayerInWeis = await web3.utils.toWei(pool.amountPerPlayer, 'ether');
      console.log('joinPoolActions', 'amountPerPlayerInWeis: ', amountPerPlayerInWeis);
      console.log('joinPoolActions', 'Predictions: ', predictions);
      console.log('joinPoolActions', 'Pool: ', pool);
      console.log('joinPoolActions', 'accounts[0]: ', accounts[0]);
      console.log('joinPoolActions', 'amountPerPlayerInWeis1: ', amountPerPlayerInWeis);

      const tx = await poolInstance.methods
        .sendPredictionSet(predictions)
        .send({
          from: accounts[0],
          value: amountPerPlayerInWeis,
        });
        console.log('tx', tx);
      dispatch({ type: actionTypes.JOIN_POOL_SUCCESS, payload: tx });
      resolve(tx);
    } catch (error) {
      console.log(error);
      dispatch({ type: actionTypes.JOIN_POOL_FAIL, payload: error.message });
      reject(error);
    }
  });

