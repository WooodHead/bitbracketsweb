import { combineReducers } from 'redux';
import { combineForms, createForms } from 'react-redux-form';
import languageReducer from './languageReducer';
import metamaskReducer from './metamaskReducer';
import createPoolReducer from './createPoolReducer';
import joinPoolReducer from './joinPoolReducer';
import poolReducer from './poolReducer';
import contestReducer from './contestReducer';
import predictionsReducer from './predictionsReducer';
import poolsReducer from './poolsReducer';

export default combineReducers({
  language: languageReducer,
  metamask: metamaskReducer,
  pool: poolReducer,
  contest: contestReducer,
  poolR: poolsReducer,
  predictions: predictionsReducer,
  ...createForms({
    createPool: createPoolReducer,
    joinPool: joinPoolReducer
  })
});
