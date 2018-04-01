import {
  FETCH_MOVIE,
  FETCH_DISCOVER_MOVIES,
  FETCH_MOVIE_IS_LOADING,
  FETCH_MOVIE_HAS_ERRORED
} from '../constants/action_types';
import _ from 'lodash';

const initialState = {
  byId: {},
  isLoading: false,
  hasErrored: false
};

function fetchMovieIsLoading(state = initialState, action) {
  return {
    ...state,
    isLoading: action.payload
  };
}

function fetchMovieHasErrored(state = initialState, action) {
  return {
    ...state,
    hasErrored: action.payload
  };
}

function fetchMovie(state = initialState, action) {
  return {
    ...state,
    byId: _.merge({}, state.byId, {
      [action.payload.id]: { ...action.payload, lastFetched: Date.now() }
    }),
    hasErrored: false
  };
}

function fetchDiscoverMovies(state = initialState, action) {
  return {
    ...state,
    byId: _.merge({}, state.byId, _.mapKeys(action.payload.results, 'id')),
    hasErrored: false
  };
}

export function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_IS_LOADING:
      return fetchMovieIsLoading(state, action);
    case FETCH_MOVIE_HAS_ERRORED:
      return fetchMovieHasErrored(state, action);
    case FETCH_MOVIE:
      return fetchMovie(state, action);
    case FETCH_DISCOVER_MOVIES:
      return fetchDiscoverMovies(state, action);
    default:
      return state;
  }
}
