import { actionTypes } from '../actions/types';

const INITIAL_STATE = {
  pools: [],
  loading: false,
  error: undefined,
};

export default function (state = INITIAL_STATE, action) {
  // console.log('Action', action);

  switch (action.type) {
    case actionTypes.FETCH_POOLS_REQUEST:
      return { ...state, loading: true, error: undefined };
    case actionTypes.FETCH_POOLS_SUCCESS:
      return {
        ...state, pools: action.payload, loading: false, error: undefined,
      };
    case actionTypes.FETCH_POOLS_FAIL:
      return { ...state, loading: false, error: action.payload };

    default: return state;
  }
}
