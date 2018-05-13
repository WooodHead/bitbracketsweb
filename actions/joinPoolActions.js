import _ from 'lodash';
import { actionTypes } from '../actions/types';

const API = process.env.BACKEND_URL;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const isNotUndefined = value => !(_.isUndefined(value));

export const joinPool = (pool, predictions) => async dispatch => {
    dispatch({ type: actionTypes.JOIN_POOL_REQUEST });
    const predictionArray = _.map(predictions, 'prediction').filter(isNotUndefined);
    console.log('Predictions: ', predictionArray);
    await delay(5000);
    dispatch({ type: actionTypes.JOIN_POOL_SUCCESS, payload: predictions });
}