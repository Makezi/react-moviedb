import axios from 'axios';
import { BASE_API_URL, API_KEY, API_CACHE_DURATION } from '../constants/api';
import {
  FETCH_DISCOVER_MOVIES,
  FETCH_DISCOVER_MOVIES_IS_LOADING,
  FETCH_DISCOVER_MOVIES_HAS_ERRORED
} from '../constants/action_types';

function isDataStale(data) {
  const lastFetched = data ? data.lastFetched : 0;
  return Date.now() - lastFetched > lastFetched + API_CACHE_DURATION;
}

function discoverMoviesIsLoading(bool) {
  return {
    type: FETCH_DISCOVER_MOVIES_IS_LOADING,
    payload: bool
  };
}

function discoverMoviesHasErrored(bool) {
  return {
    type: FETCH_DISCOVER_MOVIES_HAS_ERRORED,
    payload: bool
  };
}

function fetchDiscoverMovies(page = 1) {
  const url = `${BASE_API_URL}discover/movie/?api_key=${API_KEY}&page=${page}`;
  return (dispatch, getState) => {
    const pageInfo = getState().discovers.pages[page];
    if (!isDataStale(pageInfo)) return;
    discoverMoviesIsLoading(true);
    axios
      .get(url)
      .then(response =>
        dispatch({ type: FETCH_DISCOVER_MOVIES, payload: response.data })
      )
      .then(() => {
        dispatch(discoverMoviesIsLoading(false));
        dispatch(discoverMoviesHasErrored(false));
      })
      .catch(() => dispatch(fetchMovieHasErrored(true)));
  };
}
