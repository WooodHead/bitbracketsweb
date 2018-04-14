import { combineReducers } from 'redux';
import { combineForms, createForms } from 'react-redux-form';
import languageReducer from './languageReducer';
import metamaskReducer from './metamaskReducer';

const poolInitialState = {
  adminName: 'Gabriel',
  adminEmail: 'gmolina@gmail.com',
  poolName: 'bitbrackets',
  entryPrice: 0.0,
  entryFee: 0.0,
  entryPassword: 'fakepwd',
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
