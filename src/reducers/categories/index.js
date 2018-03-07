import { combineReducers } from 'redux';
import { movieCategoriesReducer } from "./movie_categories";

export const categories = combineReducers({
  movies: movieCategoriesReducer
});


