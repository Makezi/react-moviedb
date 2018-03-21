import { API_CACHE_TIME } from "../constants/api";

export function isLoading(type, bool) {
  return {
    type: type,
    isLoading: bool
  };
}

export function isDataStale(data) {
  const lastFetched = data ? data.lastFetched : 0;
  return Date.now() - lastFetched > lastFetched + API_CACHE_TIME;
}