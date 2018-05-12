import { actionTypes } from '../actions/types';

const INITIAL_STATE = {
  pool: undefined,
  loading: false,
  error: undefined,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_POOL_REQUEST:
      return { ...state, loading: true, error: undefined };
    case actionTypes.FETCH_POOL_SUCCESS:
      return {
        ...state, info: action.payload, loading: false, error: undefined,
      };
    case actionTypes.FETCH_POOL_FAIL:
      return { ...state, loading: false, error: action.payload };

    default: return state;
  }
}
