import { actionTypes } from '../actions/types';

const INITIAL_STATE = {
    current: 'en',
    loading: false,
    error: undefined,
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionTypes.CHANGE_LANGUAGE_REQUEST:
            return { ...state, loading: true, error: undefined };
        case actionTypes.CHANGE_LANGUAGE_SUCCESS:
            return { current: action.payload, loading: false, error: undefined }
        case actionTypes.CHANGE_LANGUAGE_FAIL:
            return { loading: false, error: action.payload }
        default: return state
    }
}
