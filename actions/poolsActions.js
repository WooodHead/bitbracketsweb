import axios from 'axios';
import { actionTypes } from '../actions/types';

const API = 'http://localhost:3001/pools/0x0bbdbdbdbd2121200231';

export const fetchPools = () => async dispatch => {
  dispatch({ type: actionTypes.FETCH_POOLS_REQUEST });

  try {
    const res = await axios.get(`${API}`);
    dispatch({ type: actionTypes.FETCH_POOLS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_POOLS_FAIL, payload: error });
  }
};