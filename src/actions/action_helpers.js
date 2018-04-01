import { API_CACHE_DURATION } from '../constants/api';
import axios from "axios";

export function isDataStale(data) {
  let lastFetched = 0;
  if (data && data.lastFetched !== undefined) {
    lastFetched = data.lastFetched;
  }
  return Date.now() - lastFetched > lastFetched + API_CACHE_DURATION;
}

function setFetchStatus(actionType, bool) {
  return {
    type: actionType,
    payload: bool
  };
}

export function fetchData(dispatch, url, successType, loadingType, errorType) {
  dispatch(setFetchStatus(loadingType, true));
  axios
    .get(url)
    .then(response => dispatch({ type: successType, payload: response.data }))
    .then(() => {
      dispatch(setFetchStatus(loadingType, false));
    })
    .catch(() => dispatch(setFetchStatus(errorType, true)));
}
