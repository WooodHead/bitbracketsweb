import { combineReducers } from 'redux';
import { combineForms, createForms } from 'react-redux-form';
import languageReducer from './languageReducer';
import metamaskReducer from './metamaskReducer';

const poolInitialState = {
  adminName: '',
  adminEmail: '',
  poolName: '',
  entryPrice: 0.0,
  entryFee: 0.0,
  entryPassword: '',
  terms: false,
  rules: false,
};

export default combineReducers({
  language: languageReducer,
  metamask: metamaskReducer,
  ...createForms({
    pool: poolInitialState,
  }),
});
