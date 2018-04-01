import { isDataStale, fetchData } from './action_helpers';
import { BASE_API_URL, API_KEY } from '../constants/api';
import {
  FETCH_DISCOVER_MOVIES,
  FETCH_DISCOVER_MOVIES_IS_LOADING,
  FETCH_DISCOVER_MOVIES_HAS_ERRORED
} from '../constants/action_types';

export function fetchDiscoverMovies(page = 1) {
  const url = `${BASE_API_URL}discover/movie?api_key=${API_KEY}&page=${page}`;
  return (dispatch, getState) => {
    if (!isDataStale(getState().discover.pages[page])) return;
    fetchData(
      dispatch,
      url,
      FETCH_DISCOVER_MOVIES,
      FETCH_DISCOVER_MOVIES_IS_LOADING,
      FETCH_DISCOVER_MOVIES_HAS_ERRORED
    );
  };
}
