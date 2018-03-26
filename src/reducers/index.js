import { combineReducers } from 'redux';
import { moviesReducer } from './movies_reducer';
import { discoverReducer } from './discover_reducer';

export default combineReducers({
  movies: moviesReducer,
  discover: discoverReducer
});
