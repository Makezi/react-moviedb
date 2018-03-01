import axios from 'axios';
import {
  FETCH_MOVIE_GENRES,
  FETCH_SHOW_GENRES
} from '../constants/action_types';
import { BASE_URL, API_KEY } from '../constants/api';
import { fetchData } from './action_helpers';

export function fetchMovieGenres() {
  const url = `${BASE_URL}genre/movie/list${API_KEY}`;
  return fetchData(url, FETCH_MOVIE_GENRES);
}

export function fetchShowGenres() {
  const url = `${BASE_URL}genre/tv/list${API_KEY}`;
  return fetchData(url, FETCH_SHOW_GENRES);
}
