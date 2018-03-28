import { isDataStale, fetchData } from './action_helpers';
import { BASE_API_URL, API_KEY } from '../constants/api';
import {
  FETCH_MOVIE,
  FETCH_MOVIE_IS_LOADING,
  FETCH_MOVIE_HAS_ERRORED
} from '../constants/action_types';

export function fetchMovie(id) {
  const url = `${BASE_API_URL}movie/${id}?api_key=${API_KEY}`;
  return (dispatch, getState) => {
    const movie = getState().movies.byId[id];
    if (!isDataStale(movie)) return;
    fetchData(
      dispatch,
      url,
      FETCH_MOVIE,
      FETCH_MOVIE_IS_LOADING,
      FETCH_MOVIE_HAS_ERRORED
    );
  };
}
