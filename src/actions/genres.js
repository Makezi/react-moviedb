import axios from 'axios';
import {
  FETCH_MOVIE_GENRES,
  FETCH_SHOW_GENRES
} from '../constants/action_types';
import { fetchData } from './action_helpers';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

export function fetchMovieGenres() {
  const url = `${BASE_URL}genre/movie/list${API_KEY}`;
  return fetchData(url, FETCH_MOVIE_GENRES);
}

export function fetchShowGenres() {
  const url = `${BASE_URL}genre/tv/list${API_KEY}`;
  return fetchData(url, FETCH_SHOW_GENRES);
}
