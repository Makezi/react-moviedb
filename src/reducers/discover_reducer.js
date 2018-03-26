import {
  FETCH_DISCOVER_MOVIES,
  FETCH_DISCOVER_MOVIES_IS_LOADING,
  FETCH_DISCOVER_MOVIES_HAS_ERRORED
} from '../constants/action_types';

const initialState = {
  pages: {},
  isLoading: false,
  hasErrored: false
};

function fetchDiscoverMoviesIsLoading(state = initialState, action) {
  return {
    ...state,
    isLoading: action.payload
  };
}

function fetchDiscoverMoviesHasErrored(state = initialState, action) {
  return {
    ...state,
    hasErrored: action.payload
  };
}

function fetchDiscoverMovies(state = initialState, action) {
  return state;
}

export function discoverReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DISCOVER_MOVIES_IS_LOADING:
      return fetchDiscoverMoviesIsLoading(state, action);
    case FETCH_DISCOVER_MOVIES_HAS_ERRORED:
      return fetchDiscoverMoviesHasErrored(state, action);
    case FETCH_DISCOVER_MOVIES:
      return fetchDiscoverMovies(state, action);
    default:
      return state;
  }
}
