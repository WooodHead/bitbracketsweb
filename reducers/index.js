import { combineReducers } from 'redux';
import { combineForms, createForms } from 'react-redux-form';
import languageReducer from './languageReducer';
import metamaskReducer from './metamaskReducer';
import createPoolReducer from './createPoolReducer';
import joinPoolReducer from './joinPoolReducer';
import poolReducer from './poolReducer';
import matchesReducer from './matchesReducer';
import predictionsReducer from './predictionsReducer';

export default combineReducers({
  language: languageReducer,
  metamask: metamaskReducer,
  pool: poolReducer,
  matches: matchesReducer,
  predictions: predictionsReducer,
  ...createForms({
    createPool: createPoolReducer,
    joinPool: joinPoolReducer,
  }),
});
