import { actionTypes } from '../actions/types';

const INITIAL_STATE = {
    metamaskInstalled: undefined,
    metamaskLocked: undefined,
    metamaskNetworkIsValid: undefined,
    defaultAccount: undefined,
    loading: true,
    network: ''
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionTypes.LOCKED_METAMASK_ACCOUNT:
            return { ...state };
        case actionTypes.UNLOCKED_METAMASK_ACCOUNT:
            return { ...state };
        case actionTypes.CHANGE_METAMASK_ACCOUNT:
            return { ...state };
        case actionTypes.CHANGE_METAMASK_NETWORK:
            return { ...state };
        default: return state;
    }
}
