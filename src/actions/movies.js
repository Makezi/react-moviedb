import axios from 'axios';
import { MOVIE_IS_LOADING, FETCH_MOVIE } from '../constants/action_types';
import { BASE_API_URL, API_KEY, API_CACHE_TIME } from '../constants/api';
import { isLoading } from './action_helpers';

export function fetchMovie(id) {
  const url = `${BASE_API_URL}movie/${id}${API_KEY}`;
  return (dispatch, getState) => {
    const movie = getState().movies.byId[id];
    const lastFetched = movie ? movie.lastFetched : 0;
    const isDataStale = Date.now() - lastFetched > lastFetched + API_CACHE_TIME;
    if (!isDataStale) return;
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
          type: FETCH_MOVIE,
          payload: response.data
        })
      )
      .catch(error => console.error(error));
  };
}
