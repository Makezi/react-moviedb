import axios from 'axios';
import { SHOW_IS_LOADING, FETCH_SHOW } from '../constants/action_types';
import { BASE_API_URL, API_KEY, API_CACHE_TIME } from '../constants/api';
import { isLoading } from './action_helpers';

export function fetchShow(id) {
  const url = `${BASE_API_URL}tv/${id}${API_KEY}`;
  return fetchData(url, FETCH_SHOW);
}

export function fetchData(url, action) {
  return (dispatch, getState) => {
    const lastFetched = getState().shows.lastFetched;
    const isDataStale = Date.now() - lastFetched > lastFetched + API_CACHE_TIME;
    if (!isDataStale) return;
    dispatch(isLoading(SHOW_IS_LOADING, true));
    axios
      .get(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(isLoading(SHOW_IS_LOADING, false));
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
