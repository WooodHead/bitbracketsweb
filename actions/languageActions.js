import axios from 'axios';
import { actionTypes } from '../actions/types';

const API_BASE_URL = process.env.ENDPOINT_URL;

export const changeLanguage = language => (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_LANGUAGE_REQUEST });

  dispatch({ type: actionTypes.CHANGE_LANGUAGE_SUCCESS, payload: language });
};

export const fetchLanguages = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_LANGUAGES_REQUEST });

  try {
    const res = await axios.get(`${API_BASE_URL}/languages`);
    dispatch({ type: actionTypes.FETCH_LANGUAGES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_LANGUAGES_FAIL, payload: error.message });
  }
};
