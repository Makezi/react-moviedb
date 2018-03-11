import { combineReducers } from 'redux';
import { movies } from './movies';
import { shows } from "./shows";
import { categories } from "./categories/";

export default combineReducers({ movies, shows, categories });
