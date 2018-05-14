import _ from 'lodash';
import axios from 'axios';
import { actionTypes } from '../actions/types';
import CONF from '../conf';

const API_BASE_URL = CONF.endpoint.url;

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
    const integers = [];
    for(var i in predictionArray) {
        integers.push({
            "index": parseInt(i),
            "selection": predictionArray[i]
        });
    }

    //TODO Pass this value as parameter in this action.
    const contestName = "Rusia2018Test11";
    const data = {
        name: contestName,
        matches: integers
    }; 
    console.log('data', data);
    try {
        const res = await axios.post(`${API_BASE_URL}/predictions/${contestName}/build`, data);
        console.log(res);
        dispatch({ type: actionTypes.SAVE_PREDICTIONS_SUCCESS, payload: res.data });
    } catch (error) {
        console.log('error', error);
        dispatch({ type: actionTypes.SAVE_PREDICTIONS_FAIL, payload: error });
    }
}