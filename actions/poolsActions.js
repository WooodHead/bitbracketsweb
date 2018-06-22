/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { actionTypes } from '../actions/types';
import CONF from '../conf';

const BASE_URL = CONF.endpoint.url;

const API = BASE_URL;

export const fetchPools = address => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_POOLS_REQUEST });

  try {
    const res = await axios.get(`${API}/users/${address}/pools`);
    dispatch({ type: actionTypes.FETCH_POOLS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_POOLS_FAIL, payload: error });
  }
};
