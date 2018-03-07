import axios from 'axios';
import {
  POPULAR_MOVIES_IS_LOADING,
  NOW_PLAYING_MOVIES_IS_LOADING,
  ON_THE_AIR_SHOWS_IS_LOADING,
  FETCH_NOW_PLAYING_MOVIES,
  FETCH_POPULAR_MOVIES,
  FETCH_ON_THE_AIR_SHOWS,
  STORE_MOVIE,
  STORE_SHOW
} from '../constants/action_types';
import { isLoading } from './action_helpers';
import { BASE_API_URL, API_KEY } from '../constants/api';

export function fetchNowPlayingMovies(page = 1) {
  const url = `${BASE_API_URL}movie/now_playing${API_KEY}&page=${page}`;
  return dispatch => {
    dispatch(isLoading(NOW_PLAYING_MOVIES_IS_LOADING, true));
    axios
      .get(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => {
        dispatch({ type: FETCH_NOW_PLAYING_MOVIES, payload: response.data });
        response.data.results.forEach(result =>
          dispatch({ type: STORE_MOVIE, payload: result })
        );
      })
      .then(() => dispatch(isLoading(NOW_PLAYING_MOVIES_IS_LOADING, false)))
      .catch(error => console.error(error));
    }
}

export function fetchPopularMovies(page = 1) {
  const url = `${BASE_API_URL}movie/popular${API_KEY}&page=${page}`;
  return dispatch => {
    dispatch(isLoading(POPULAR_MOVIES_IS_LOADING, true));
    axios
      .get(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => {
        dispatch({ type: FETCH_POPULAR_MOVIES, payload: response.data });
        response.data.results.forEach(result =>
          dispatch({ type: STORE_MOVIE, payload: result })
        );
      })
      .then(() => dispatch(isLoading(POPULAR_MOVIES_IS_LOADING, false)))
      .catch(error => console.error(error));
  };
}

export function fetchOnTheAirShows(page = 1) {
  const url = `${BASE_API_URL}tv/on_the_air${API_KEY}&page=${page}`;
  return dispatch => {
    dispatch(isLoading(ON_THE_AIR_SHOWS_IS_LOADING, true));
    axios
      .get(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => {
        dispatch({ type: FETCH_ON_THE_AIR_SHOWS, payload: response.data });
        response.data.results.forEach(result =>
          dispatch({ type: STORE_SHOW, payload: result })
        );
      })
      .then(() => dispatch(isLoading(ON_THE_AIR_SHOWS_IS_LOADING, false)))
      .catch(error => console.error(error));
  };
}
