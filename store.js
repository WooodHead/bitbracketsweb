import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import reducer from './reducers';

const makeStore = (reducers, initialState) => createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export const initStore = (initialState, {
  isServer, req, debug, storeKey,
}) => {
  if (isServer) {
    // initialState = initialState || { fromServer: 'foo' };

    return makeStore(reducer, initialState);
  }

  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['predictions', 'language'], // make sure it does not clash with server keys
  };

  const persistedReducer = persistReducer(persistConfig, reducer);
  const store = makeStore(persistedReducer, initialState);

  store.__persistor = persistStore(store); // Nasty hack

  return store;
};
