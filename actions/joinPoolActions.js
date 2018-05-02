import { actionTypes } from '../actions/types';

const API = process.env.BACKEND_URL;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const joinPool = (pool, prediction) => async dispatch => {
    dispatch({ type: actionTypes.JOIN_POOL_REQUEST });
    await delay(5000);
    dispatch({ type: actionTypes.JOIN_POOL_SUCCESS, payload: pool });
}