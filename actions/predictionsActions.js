import _ from 'lodash';
import { actionTypes } from '../actions/types';

const API = process.env.BACKEND_URL;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const isNotUndefined = value => !(_.isUndefined(value));

export const fetchPredictions = (pool) => async dispatch => {
    dispatch({ type: actionTypes.FETCH_PREDICTIONS_REQUEST });
    await delay(5000);
    dispatch({ type: actionTypes.FETCH_PREDICTIONS_SUCCESS, payload: pool });
}

export const updatePrediction = (matchIndex, prediction) => async dispatch => {
    dispatch({ type: actionTypes.UPDATE_PREDICTION_REQUEST });
    const payload = {
        index: matchIndex,
        prediction
    };
    dispatch({ type: actionTypes.UPDATE_PREDICTION_SUCCESS, payload });
}

export const savePredictions = (pool, predictions) => async dispatch => {
    dispatch({ type: actionTypes.SAVE_PREDICTIONS_REQUEST });
    const predictionArray = _.map(predictions, 'prediction').filter(isNotUndefined);
    console.log('Predictions: ', predictionArray);
    await delay(5000);
    dispatch({ type: actionTypes.SAVE_PREDICTIONS_SUCCESS, payload: predictions });
}