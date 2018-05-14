import axios from 'axios';
import CONF from '../conf';
import { actionTypes } from '../actions/types';

const API_BASE_URL = CONF.endpoint.url;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const fetchMatches = (contest) => async dispatch => {
    dispatch({ type: actionTypes.FETCH_MATCHES_REQUEST });

    try {
        const res = await axios.get(`${API_BASE_URL}/contests/${contest}/matches`);
        dispatch({ type: actionTypes.FETCH_MATCHES_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: actionTypes.FETCH_MATCHES_FAIL, payload: error });
    }
};

const fetchTeams = (contest) => async dispatch => {
    dispatch({ type: actionTypes.FETCH_TEAMS_REQUEST });

    try {
        const res = await axios.get(`${API_BASE_URL}/contests/${contest}/teams`);
        dispatch({ type: actionTypes.FETCH_TEAMS_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: actionTypes.FETCH_TEAMS_FAIL, payload: error });
    }
};

export const fetchContest = (contest) => async dispatch => {
    await Promise.all([
        dispatch(fetchTeams(contest)),
        dispatch(fetchMatches(contest))
    ]);
};
