import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { combineReducers } from 'redux';
import movieReducer from './reducers/movieReducer';

const rootReducer = combineReducers({
  moviesData: movieReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
