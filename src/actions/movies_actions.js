import axios from 'axios';
import { BASE_API_URL, API_KEY } from '../constants/api';
import { FETCH_MOVIE, FETCH_MOVIE_IS_LOADING } from '../constants/action_types';

function fetchMovieIsLoading(bool) {
  return {
    type: FETCH_MOVIE_IS_LOADING,
    payload: bool
  };
}

export function fetchMovie(id) {
  const url = `${BASE_API_URL}movie/${id}?api_key=${API_KEY}`;
  return dispatch => {
    dispatch(fetchMovieIsLoading(true));
    axios
      .get(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => dispatch({ type: FETCH_MOVIE, payload: response.data }))
      .then(() => dispatch(fetchMovieIsLoading(false)))
      .catch(error => console.log(error));
  };
}
