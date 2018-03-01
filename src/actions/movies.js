import axios from 'axios';
import { IS_LOADING, HAS_ERRORED, FETCH_MOVIE } from "../constants/action_types";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

export function moviesHasErrored(bool) {
  return {
    type: HAS_ERRORED,
    hasErrored: bool
  };
}

export function moviesIsLoading(bool) {
  return {
    type: IS_LOADING,
    isLoading: bool
  };
}

export function fetchMovie(id) {
  return dispatch => {
    dispatch(moviesIsLoading(true));
    axios
      .get(`${BASE_URL}movie/${id}${API_KEY}`)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(moviesIsLoading(false));
        return response;
      })
      .then(response =>
        dispatch({
          type: FETCH_MOVIE,
          movie: response.data
        })
      )
      .catch(() => dispatch(moviesHasErrored(true)));
  };
}
