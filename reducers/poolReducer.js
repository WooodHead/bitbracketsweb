import { actionTypes } from '../actions/types';

const INITIAL_STATE = {
  pool: undefined,
  loading: false,
  error: undefined,
  loadingPlayers: true,
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
    case actionTypes.FETCH_POOL_PARTICIPANTS_REQUEST:
      return { ...state, loadingPlayers: true, error: undefined };
    case actionTypes.FETCH_POOL_PARTICIPANTS_SUCCESS:
      return {
        ...state,
        info: { ...state.info, players: action.payload.players },
        loadingPlayers: false,
        error: undefined,
      };
    case actionTypes.FETCH_POOL_PARTICIPANTS_FAIL:
      return { ...state, loadingPlayers: false, error: action.payload };

    default: return state;
  }
}
