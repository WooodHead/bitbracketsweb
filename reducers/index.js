import { combineReducers } from 'redux';
import { combineForms, createForms } from 'react-redux-form';
import languageReducer from './languageReducer';
import metamaskReducer from './metamaskReducer';
import createPoolReducer from './createPoolReducer';
import joinPoolReducer from './joinPoolReducer';
import poolReducer from './poolReducer';

export default combineReducers({
  // list: listParticipantReducer,
  language: languageReducer,
  metamask: metamaskReducer,
  pool: poolReducer,
  ...createForms({
    createPool: createPoolReducer,
    joinPool: joinPoolReducer,
  }),
});
