import axios from 'axios';
import {
  FETCH_NOW_PLAYING_MOVIES
} from '../constants/action_types';
import { BASE_URL, API_KEY } from '../constants/api';
import { fetchData } from './action_helpers';

export function fetchNowPlayingMovies(page = 1) {
  const url = `${BASE_URL}movie/now_playing${API_KEY}&page=${page}`;
  return fetchData(url, FETCH_NOW_PLAYING_MOVIES);
}