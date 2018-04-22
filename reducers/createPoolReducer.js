import { actionTypes } from '../actions/types';

const INITIAL_STATE = {
    adminName: '',
    adminEmail: '',
    poolName: '',
    entryPrice: 0.0,
    entryFee: 0.0,
    entryPassword: '',
    entryTotal: 0.0,
    terms: false,
    rules: false,
    loading: false,
    error: undefined,
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {

        case actionTypes.CREATE_POOL_REQUEST:
            return { ...state, loading: true, error: undefined };
        case actionTypes.CREATE_POOL_SUCCESS:
            return { ...state, ...action.payload, loading: false, error: undefined }
        case actionTypes.CREATE_POOL_FAIL:
            return { ...state, loading: false, error: action.payload }

        case actionTypes.POOL_DETAIL_REQUEST:
            return { ...state, loading: true, error: undefined };
        case actionTypes.POOL_DETAIL_SUCCESS:
            return { ...state, ...action.payload, loading: false, error: undefined }
        case actionTypes.POOL_DETAIL_FAIL:
            return { ...state, loading: false, error: action.payload }
            
        default: return state
    }
}
