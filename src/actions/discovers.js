import axios from 'axios';
import {
  DISCOVER_MOVIES_IS_LOADING,
  DISCOVER_SHOWS_IS_LOADING,
  FETCH_DISCOVER_MOVIES,
  FETCH_DISCOVER_SHOWS
} from '../constants/action_types';
import { BASE_API_URL, API_KEY, API_CACHE_TIME } from '../constants/api';
import { isLoading } from './action_helpers';

export function fetchDiscoverShows() {
  const url = `${BASE_API_URL}discover/movie/${API_KEY}`;
  return (dispatch, getState) => {
    const show = getState().shows.byId[id];
    const lastFetched = show ? show.lastFetched : 0;
    const isDataStale = Date.now() - lastFetched > lastFetched + API_CACHE_TIME;
    if (!isDataStale) return;
    dispatch(isLoading(DISCOVER_SHOWS_IS_LOADING, true));
    axios
      .get(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(isLoading(DISCOVER_SHOWS_IS_LOADING, false));
        return response;
      })
      .then(response =>
        dispatch({
          type: FETCH_DISCOVER_SHOWS,
          payload: response.data
        })
      )
      .catch(error => console.error(error));
  };
}

export function fetchDiscoverMovies() {
  const url = `${BASE_API_URL}discover/movie/${API_KEY}`;
  return (dispatch, getState) => {
    const movie = getState().movies.byId[id];
    const lastFetched = movie ? movie.lastFetched : 0;
    const isDataStale = Date.now() - lastFetched > lastFetched + API_CACHE_TIME;
    if (!isDataStale) return;
    dispatch(isLoading(DISCOVER_MOVIES_IS_LOADING, true));
    axios
      .get(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(isLoading(DISCOVER_MOVIES_IS_LOADING, false));
        return response;
      })
      .then(response =>
        dispatch({
          type: FETCH_DISCOVER_MOVIE,
          payload: response.data
        })
      )
      .catch(error => console.error(error));
  };
}
