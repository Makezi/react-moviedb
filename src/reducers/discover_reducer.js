import {
  FETCH_DISCOVER_MOVIES,
  FETCH_DISCOVER_MOVIES_IS_LOADING,
  FETCH_DISCOVER_MOVIES_HAS_ERRORED
} from '../constants/action_types';

const initialState = {
  pages: {},
  totalPages: 0,
  totalResults: 0,
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
  return {
    ...state,
    pages: {
      ...state.pages,
      [action.payload.page]: {
        page: action.payload.page,
        ids: action.payload.results.map(movie => movie.id),
        lastFetched: Date.now()
      }
    },
    totalPages:
      action.payload.total_pages <= 1000 ? action.payload.total_pages : 1000,
    totalResults: action.payload.total_results,
    hasErrored: false
  };
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
