import axios from 'axios';
import { FETCH_MOVIE } from '../constants/action_types';
import { fetchData } from './action_helpers';
import { BASE_URL, API_KEY } from '../constants/api';

export function fetchMovie(id) {
  const url = `${BASE_URL}movie/${id}${API_KEY}`;
  return fetchData(url, FETCH_MOVIE);
}
