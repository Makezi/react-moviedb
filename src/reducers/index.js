import { combineReducers } from 'redux';
import { movies } from './movies';
import { genres } from './genres';
import { categories } from './categories';

export default combineReducers({ movies, genres, categories });
