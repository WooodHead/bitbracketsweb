// import _ from 'lodash';
import { actionTypes } from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: undefined,
  apiPredictions: undefined,
  predictions: {},
  othersPredictions: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_PREDICTIONS_REQUEST:
      return { ...state, loading: true, error: undefined };
    case actionTypes.FETCH_PREDICTIONS_SUCCESS:
      return {
        ...state,
        othersPredictions: action.payload,
        loading: false,
        error: undefined
      };
    case actionTypes.FETCH_PREDICTIONS_FAIL:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.UPDATE_PREDICTION_REQUEST:
      console.log('predictionsReducer updatePredictionRequest', action);
      return { ...state, loading: true, error: undefined };
    case actionTypes.UPDATE_PREDICTION_SUCCESS:
      console.log('predictionsReducer updatePredictionSuccess', action.payload);
      console.log('Reducer', state);
      return {
        predictions: {
          ...state.predictions,
          [action.payload.index]: action.payload
        },
        loading: false,
        error: undefined
      };
    case actionTypes.UPDATE_PREDICTION_FAIL:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.SAVE_PREDICTIONS_REQUEST:
      return { ...state, loading: true, error: undefined };
    case actionTypes.SAVE_PREDICTIONS_SUCCESS:
      return {
        ...state,
        apiPredictions: action.payload,
        loading: false,
        error: undefined
      };
    case actionTypes.SAVE_PREDICTIONS_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
