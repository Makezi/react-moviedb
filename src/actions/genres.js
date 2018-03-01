import axios from 'axios';
import {
  IS_LOADING,
  HAS_ERRORED,
  FETCH_MOVIE_GENRES,
  FETCH_SHOW_GENRES
} from '../constants/action_types';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

export function genresHasErrored(bool) {
  return {
    type: HAS_ERRORED,
    hasErrored: bool
  };
}

export function genresIsLoading(bool) {
  return {
    type: IS_LOADING,
    isLoading: bool
  };
}

export function fetchMovieGenres() {
  return dispatch => {
    dispatch(genresIsLoading(true));
    axios
      .get(`${BASE_URL}genre/movie/list${API_KEY}`)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(genresIsLoading(false));
        return response;
      })
      .then(response =>
        dispatch({
          type: FETCH_MOVIE_GENRES,
          genres: response.data.genres
        })
      )
      .catch(() => dispatch(genresHasErrored(true)));
  };
}

export function fetchShowGenres() {
  return dispatch => {
    dispatch(genresIsLoading(true));
    axios
      .get(`${BASE_URL}genre/tv/list${API_KEY}`)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(genresIsLoading(false));
        return response;
      })
      .then(response =>
        dispatch({
          type: FETCH_SHOW_GENRES,
          genres: response.data.genres
        })
      )
      .catch(() => dispatch(genresHasErrored(true)));
  };
}
