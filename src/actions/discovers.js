import axios from 'axios';
import {
  DISCOVER_MOVIES_IS_LOADING,
  DISCOVER_SHOWS_IS_LOADING,
  FETCH_DISCOVER_MOVIES,
  FETCH_DISCOVER_SHOWS,
  STORE_MOVIE,
  STORE_SHOW
} from '../constants/action_types';
import { BASE_API_URL, API_KEY, API_CACHE_TIME } from '../constants/api';
import { isLoading, isDataStale } from './action_helpers';

export function fetchDiscoverShows(page = 1) {
  const url = `${BASE_API_URL}discover/tv${API_KEY}&page=${page}`;
  return (dispatch, getState) => {
    const pageInfo = getState().discovers.shows.pages[page];
    if (!isDataStale(pageInfo)) return;
    dispatch(isLoading(DISCOVER_SHOWS_IS_LOADING, true));
    axios
      .get(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => {
        dispatch({ type: FETCH_DISCOVER_SHOWS, payload: response.data });
        response.data.results.forEach(result =>
          dispatch({ type: STORE_SHOW, payload: result })
        );
      })
      .then(() => dispatch(isLoading(DISCOVER_SHOWS_IS_LOADING, false)))
      .catch(error => console.error(error));
  };
}

export function fetchDiscoverMovies(page = 1) {
  const url = `${BASE_API_URL}discover/movie${API_KEY}&page=${page}`;
  return (dispatch, getState) => {
    const pageInfo = getState().discovers.movies.pages[page];
    if (!isDataStale(pageInfo)) return;
    dispatch(isLoading(DISCOVER_MOVIES_IS_LOADING, true));
    axios
      .get(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => {
        dispatch({ type: FETCH_DISCOVER_MOVIES, payload: response.data });
        response.data.results.forEach(result =>
          dispatch({ type: STORE_MOVIE, payload: result })
        );
      })
      .then(() => dispatch(isLoading(DISCOVER_MOVIES_IS_LOADING, false)))
      .catch(error => console.error(error));
  };
}
