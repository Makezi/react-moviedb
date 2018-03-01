import axios from 'axios';
import { IS_LOADING, HAS_ERRORED } from '../constants/action_types';

export function isLoading(bool) {
  return {
    type: IS_LOADING,
    isLoading: bool
  };
}

export function hasErrored(bool) {
  return {
    type: HAS_ERRORED,
    hasErrored: bool
  };
}

export function fetchData(url, action) {
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
      .then(response =>
        dispatch({
          type: action,
          payload: response.data
        })
      )
      .catch(() => dispatch(hasErrored(true)));
  };
}
