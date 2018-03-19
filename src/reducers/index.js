import { combineReducers } from 'redux';
import { movies } from './movies';
import { shows } from './shows';
import { categories } from './categories/';
import { discovers } from './discovers';

export default combineReducers({ movies, shows, categories, discovers });
