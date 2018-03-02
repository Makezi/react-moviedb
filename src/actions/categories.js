import axios from 'axios';
import {
  IS_LOADING,
  HAS_ERRORED,
  FETCH_NOW_PLAYING_MOVIES,
  FETCH_MOVIE
} from '../constants/action_types';
import { isLoading, hasErrored } from './action_helpers';
import { BASE_URL, API_KEY } from '../constants/api';

export function fetchNowPlayingMovies(page = 1) {
  const url = `${BASE_URL}movie/now_playing${API_KEY}&page=${page}`;
  return fetchData(url, FETCH_NOW_PLAYING_MOVIES, FETCH_MOVIE);
}

function fetchData(url, mainAction, slicedAction) {
  return dispatch => {
    dispatch(isLoading(true));
    axios
      .get(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(isLoading(false));
        return response;
      })
      .then(response => {
        dispatch({ type: mainAction, payload: response.data });
        response.data.results.forEach(result =>
          dispatch({ type: slicedAction, payload: result })
        );
      })
      .catch(() => dispatch(hasErrored(true)));
  };
}
