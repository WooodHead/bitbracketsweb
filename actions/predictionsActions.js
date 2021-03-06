import _ from 'lodash';
import axios from 'axios';
import { actionTypes } from '../actions/types';

const API_BASE_URL = process.env.ENDPOINT_URL;

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const isNotUndefined = value => !_.isUndefined(value);

export const fetchPredictions = (
  poolAddress,
  playerAddress
) => async dispatch => {
  dispatch({ type: actionTypes.FETCH_PREDICTIONS_REQUEST });
  try {
    const res = await axios.get(
      `${API_BASE_URL}/pools/${poolAddress}/prediction/${playerAddress}`
    );
    dispatch({
      type: actionTypes.FETCH_PREDICTIONS_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_PREDICTIONS_FAIL,
      payload: error.message
    });
  }
};

export const updatePrediction = (matchIndex, prediction) => async dispatch => {
  dispatch({ type: actionTypes.UPDATE_PREDICTION_REQUEST });
  const payload = {
    index: matchIndex,
    prediction
  };
  dispatch({ type: actionTypes.UPDATE_PREDICTION_SUCCESS, payload });
};

export const savePredictions = (pool, predictions) => async dispatch => {
  dispatch({ type: actionTypes.SAVE_PREDICTIONS_REQUEST });
  const predictionArray = _.map(predictions, 'prediction').filter(
    isNotUndefined
  );
  const integers = [];
  for (const i in predictionArray) {
    integers.push({
      index: parseInt(i) + 1,
      selection: predictionArray[i]
    });
  }

  const contestName = pool.info.contestName;
  const data = {
    name: contestName,
    matches: integers
  };
  try {
    const res = await axios.post(
      `${API_BASE_URL}/predictions/${contestName}/build`,
      data
    );
    dispatch({ type: actionTypes.SAVE_PREDICTIONS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: actionTypes.SAVE_PREDICTIONS_FAIL,
      payload: error.message
    });
  }
};
