import axios from 'axios';

export const MOVIES_HAS_ERRORED = 'MOVIES_HAS_ERRORED';
export const MOVIES_IS_LOADING = 'MOVIES_IS_LOADING';
export const FETCH_MOVIE = 'FETCH_MOVIE';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

export function moviesHasErrored(bool) {
  return {
    type: MOVIES_HAS_ERRORED,
    hasErrored: bool
  };
}

export function moviesIsLoading(bool) {
  return {
    type: MOVIES_IS_LOADING,
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
