import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import counterReducer from './ducks/counter';
import fetchPostReducer from './ducks/post';
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
  counter: counterReducer,
  post: fetchPostReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleWare = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleWare));

sagaMiddleware.run(watcherSaga);

export default store;
