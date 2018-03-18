import { actionTypes } from '../actions/types';

export const changeLanguage = (language) => dispatch => {
    dispatch({ type: actionTypes.CHANGE_LANGUAGE_REQUEST });
    return dispatch({ type: actionTypes.CHANGE_LANGUAGE_SUCCESS, payload: language });
}