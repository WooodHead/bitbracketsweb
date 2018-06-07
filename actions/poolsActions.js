import axios from 'axios';
import { actionTypes } from '../actions/types';

 const BASE_URL = process.env.BACKEND_URL;
 // const API = 'http://localhost:3001/users/managerA/pools';
  // const API = 'https://rinkeby.api.bitbrackets.io/api';
  const API = BASE_URL;

export const fetchPools = (address) => async dispatch => {
  dispatch({ type: actionTypes.FETCH_POOLS_REQUEST });

  try {    
    const res = await axios.get(`${API}/users/${address}/pools`);
    dispatch({ type: actionTypes.FETCH_POOLS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_POOLS_FAIL, payload: error });
  }
};