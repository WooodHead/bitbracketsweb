import { combineReducers } from 'redux';
import languageReducer from './languageReducer';
import metamaskReducer from './metamaskReducer';

export default combineReducers({
  language: languageReducer,
  metamask: metamaskReducer
});
