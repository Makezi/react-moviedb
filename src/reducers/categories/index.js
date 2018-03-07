import { combineReducers } from 'redux';
import { movieCategoriesReducer } from './movie_categories';
import { showCategoriesReducer } from './show_categories';

export const categories = combineReducers({
  movies: movieCategoriesReducer,
  shows: showCategoriesReducer
});
