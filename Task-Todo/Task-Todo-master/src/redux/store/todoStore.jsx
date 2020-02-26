import { createStore, applyMiddleware } from 'redux';
import todoReducers from '../reducers/todoReducers';
import thunk from 'redux-thunk';

let store = createStore( todoReducers, applyMiddleware(thunk) );

export default store;