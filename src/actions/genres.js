import axios from 'axios';
import {
  GENRE_IS_LOADING,
  FETCH_MOVIE_GENRES,
  FETCH_SHOW_GENRES
} from '../constants/action_types';
import { BASE_API_URL, API_KEY } from '../constants/api';
import { isLoading } from './action_helpers';

export function fetchMovieGenres() {
  const url = `${BASE_API_URL}genre/movie/list${API_KEY}`;
  return fetchData(url, FETCH_MOVIE_GENRES);
}

export function fetchShowGenres() {
  const url = `${BASE_API_URL}genre/tv/list${API_KEY}`;
  return fetchData(url, FETCH_SHOW_GENRES);
}

export function fetchData(url, action) {
  return dispatch => {
    dispatch(isLoading(GENRE_IS_LOADING, true));
    axios
      .get(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(isLoading(GENRE_IS_LOADING, false));
        return response;
      })
      .then(response =>
        dispatch({
          type: action,
          payload: response.data
        })
      )
      .catch(error => console.error(error));
  };
}
