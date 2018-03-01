import axios from 'axios';
import { FETCH_MOVIE } from '../constants/action_types';
import { fetchData } from './action_helpers';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

export function fetchMovie(id) {
  const url = `${BASE_URL}movie/${id}${API_KEY}`;
  return fetchData(url, FETCH_MOVIE);
}
