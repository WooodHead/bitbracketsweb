import { actionTypes } from '../actions/types';

const API = process.env.BACKEND_URL;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const createPool = (pool) => async dispatch => {
    dispatch({ type: actionTypes.CREATE_POOL_REQUEST });
    await delay(5000);
    dispatch({ type: actionTypes.CREATE_POOL_SUCCESS, payload: pool });
}

export const fetchPoolDetails = (pool) => async dispatch => {
    dispatch({ type: actionTypes.POOL_DETAIL_REQUEST });
    await delay(5000);
    dispatch({ type: actionTypes.POOL_DETAIL_SUCCESS, payload: pool });
}