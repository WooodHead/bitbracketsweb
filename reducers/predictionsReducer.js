import _ from 'lodash';
import { actionTypes } from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    error: undefined,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case actionTypes.FETCH_PREDICTIONS_REQUEST:
            return { ...state, loading: true, error: undefined };
        case actionTypes.FETCH_PREDICTIONS_SUCCESS:
            return { ...state, predictions: _.mapKeys(action.payload, 'index'), loading: false, error: undefined }
        case actionTypes.FETCH_PREDICTIONS_FAIL:
            return { ...state, loading: false, error: action.payload }

        case actionTypes.UPDATE_PREDICTION_REQUEST:
            return { ...state, loading: true, error: undefined };
        case actionTypes.UPDATE_PREDICTION_SUCCESS:
            return { ...state, [action.payload.index]: action.payload, loading: false, error: undefined }
        case actionTypes.UPDATE_PREDICTION_FAIL:
            return { ...state, loading: false, error: action.payload }

        case actionTypes.SAVE_PREDICTIONS_REQUEST:
            return { ...state, loading: true, error: undefined };
        case actionTypes.SAVE_PREDICTIONS_SUCCESS:
            return { ...action.payload, loading: false, error: undefined }
        case actionTypes.SAVE_PREDICTIONS_FAIL:
            return { ...state, loading: false, error: action.payload }

        default: return state
    }
}