import axios from 'axios';
import { actionTypes } from '../actions/types';

const API = process.env.BACKEND_URL;

export const changeLanguage = (language) => dispatch => {
    dispatch({ type: actionTypes.CHANGE_LANGUAGE_REQUEST });
    return dispatch({ type: actionTypes.CHANGE_LANGUAGE_SUCCESS, payload: language });
}

export const fetchLanguages = () => dispatch => {
  dispatch({ type: actionTypes.FETCH_LANGUAGES_REQUEST });
//   console.log(`${API}/`);
  axios
    .get(`${API}/languages`)
    .then(res => {
      dispatch({ type: actionTypes.FETCH_LANGUAGES_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: actionTypes.FETCH_LANGUAGES_FAIL, payload: error });
    });
};