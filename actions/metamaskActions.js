import { actionTypes } from '../actions/types';

export const unlockedMetamaskAccount = () => dispatch => {
    dispatch({ type: actionTypes.UNLOCKED_METAMASK_ACCOUNT });
    return dispatch({ type: actionTypes.UNLOCKED_METAMASK_ACCOUNT, payload: {}});
}

export const lockedMetamaskAccount = () => dispatch => {
    dispatch({ type: actionTypes.LOCKED_METAMASK_ACCOUNT });
    return dispatch({ type: actionTypes.LOCKED_METAMASK_ACCOUNT, payload: {}});
}

export const changeMetamaskAccount = (newAccount) => dispatch => {
    dispatch({ type: actionTypes.CHANGE_METAMASK_ACCOUNT });
    return dispatch({ type: actionTypes.CHANGE_METAMASK_ACCOUNT, payload: {defaultAccount: newAccount}});
}

export const changeMetamaskNetwork = (newNetwork) => dispatch => {
    dispatch({ type: actionTypes.CHANGE_METAMASK_NETWORK });
    return dispatch({ type: actionTypes.CHANGE_METAMASK_NETWORK, payload: {network: newNetwork}});
}