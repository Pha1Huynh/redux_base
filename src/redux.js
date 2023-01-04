import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
const myMiddleware = (store) => (next) => (action) => {
  if (action.type === 'ADD_TODOS' && action.data === 'fuck') {
    action.data = '***';
  }
  return next(action);
};
// export const store = createStore(rootReducer, applyMiddleware(myMiddleware, thunk));
export const store = configureStore({ reducer: rootReducer });
