import { combineReducers } from 'redux';
import { combineForms, createForms } from 'react-redux-form';
import languageReducer from './languageReducer';
import metamaskReducer from './metamaskReducer';
import createPoolReducer from './createPoolReducer';
import joinPoolReducer from './joinPoolReducer';
import poolReducer from './poolReducer';
import matchesReducer from './matchesReducer';
import predictionsReducer from './predictionsReducer';
<<<<<<< HEAD
import listParticipantReducer from './listParticipantReducer';
=======
>>>>>>> e5433c7e8344bd7876276aad1a9a700b5f2e6c6e
import poolsReducer from './poolsReducer';

export default combineReducers({
  list: listParticipantReducer,
  language: languageReducer,
  metamask: metamaskReducer,
  pool: poolReducer,
  poolR: poolsReducer,
  matches: matchesReducer,
  predictions: predictionsReducer,
  ...createForms({
    createPool: createPoolReducer,
    joinPool: joinPoolReducer,
  }),
});
