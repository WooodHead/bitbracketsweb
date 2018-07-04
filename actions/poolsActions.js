/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { actionTypes } from '../actions/types';

 const BASE_URL = process.env.ENDPOINT_URL;

export const fetchPools = address => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_POOLS_REQUEST });

  try {    
    const res = await axios.get(`${BASE_URL}/users/${address}/pools`);
    dispatch({ type: actionTypes.FETCH_POOLS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_POOLS_FAIL, payload: error });
  }
};
