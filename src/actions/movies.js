import axios from 'axios';
import { MOVIE_IS_LOADING, FETCH_MOVIE } from '../constants/action_types';
import { BASE_URL, API_KEY } from '../constants/api';
import { isLoading } from './action_helpers';

export function fetchMovie(id) {
  const url = `${BASE_URL}movie/${id}${API_KEY}`;
  return fetchData(url, FETCH_MOVIE);
}

export function fetchData(url, action) {
  return dispatch => {
    dispatch(isLoading(MOVIE_IS_LOADING, true));
    axios
      .get(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(isLoading(MOVIE_IS_LOADING, false));
        return response;
      })
      .then(response =>
        dispatch({
          type: action,
          payload: response.data
        })
      )
      .catch(error => console.error(error));
  };
}
