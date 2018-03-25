import {
  FETCH_MOVIE,
  FETCH_MOVIE_IS_LOADING,
  FETCH_MOVIE_HAS_ERRORED
} from '../constants/action_types';

const initialState = {
  byId: [],
  isLoading: false,
  hasErrored: false
};

function fetchMovieIsLoading(state = initialState, action) {
  return {
    ...state,
    isLoading: action.payload
  };
}

function fetchMoveHasErrored(state = initialState, action) {
  return {
    ...state,
    hasErrored: action.payload
  };
}

function fetchMovie(state = initialState, action) {
  return {
    ...state,
    byId: {
      ...state.byId,
      [action.payload.id]: { ...action.payload, lastFetched: Date.now() },
      hasErrored: false
    }
  };
}

export function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_IS_LOADING:
      return fetchMovieIsLoading(state, action);
    case FETCH_MOVIE_HAS_ERRORED:
      return fetchMoveHasErrored(state, action);
    case FETCH_MOVIE:
      return fetchMovie(state, action);
    default:
      return state;
  }
}
