import _ from 'lodash';
import { actionTypes } from '../actions/types';

const INITIAL_STATE = {
    teams: {},
    matches: {},
    loading: false,
    error: undefined,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case actionTypes.FETCH_TEAMS_REQUEST:
            return { ...state, loading: true, error: undefined };
        case actionTypes.FETCH_TEAMS_SUCCESS:
            return { ...state, teams: _.mapKeys(action.payload, 'hash'), loading: false, error: undefined }
        case actionTypes.FETCH_TEAMS_FAIL:
            return { ...state, loading: false, error: action.payload }

        case actionTypes.FETCH_MATCHES_REQUEST:
            return { ...state, loading: true, error: undefined };
        case actionTypes.FETCH_MATCHES_SUCCESS:
            return { ...state, matches: _.mapKeys(action.payload, 'index'), loading: false, error: undefined }
        case actionTypes.FETCH_MATCHES_FAIL:
            return { ...state, loading: false, error: action.payload }

        default: return state
    }
}