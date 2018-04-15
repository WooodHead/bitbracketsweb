import { combineReducers } from 'redux';
import { combineForms, createForms } from 'react-redux-form';
import languageReducer from './languageReducer';
import metamaskReducer from './metamaskReducer';
import createPoolReducer from './createPoolReducer';

export default combineReducers({
  language: languageReducer,
  metamask: metamaskReducer,
  ...createForms({
    createPool: createPoolReducer,
  }),
});