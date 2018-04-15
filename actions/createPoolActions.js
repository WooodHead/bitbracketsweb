import { actionTypes } from '../actions/types';

const API = process.env.BACKEND_URL;

export const createPool = (pool) => dispatch => {
    dispatch({ type: actionTypes.CREATE_POOL_REQUEST });
    console.log(pool);
    return dispatch({ type: actionTypes.CREATE_POOL_SUCCESS, payload: pool });
}