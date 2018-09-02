import { actionTypes } from '../actions/types';

const INITIAL_STATE = {
  languages: [{ code: 'en', name: 'en' }, { code: 'es', name: 'es' }],
  current: 'en',
  loading: false,
  error: undefined
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_LANGUAGES_REQUEST:
      return { ...state, loading: true, error: undefined };
    case actionTypes.FETCH_LANGUAGES_SUCCESS:
      return {
        ...state,
        languages: action.payload,
        loading: false,
        error: undefined
      };
    case actionTypes.FETCH_LANGUAGES_FAIL:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.CHANGE_LANGUAGE_REQUEST:
      return { ...state, loading: true, error: undefined };
    case actionTypes.CHANGE_LANGUAGE_SUCCESS:
      return {
        ...state,
        current: action.payload,
        loading: false,
        error: undefined
      };
    case actionTypes.CHANGE_LANGUAGE_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
