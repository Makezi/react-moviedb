import axios from 'axios';
import { SEARCH_DB } from '../constants/action_types';
import { BASE_API_URL, API_KEY } from '../constants/api';

export function fetchSearch(query) {
  const url = `${BASE_API_URL}search/multi${API_KEY}&query=${query}&language=en-USinclude_adult=false&page=1`;
  
  return dispatch => {
    axios
      .get(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => {
        dispatch({ type: SEARCH_DB, payload: response.data });
      })
      .catch(error => console.error(error));
  };
}
