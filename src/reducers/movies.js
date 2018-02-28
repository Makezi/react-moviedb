import {
  MOVIES_HAS_ERRORED,
  MOVIES_IS_LOADING,
  FETCH_MOVIE
} from '../actions/movies';

import _ from 'lodash';

function moviesIsLoading(state = null, action) {
  return _.merge({}, state, {
    ...state,
    entities: {
      ...state.entities,
      movies: { ...state.movies, isLoading: action.isLoading }
    }
  });
}

function moviesHasErrored(state = null, action) {
  return _.merge({}, state, {
    ...state,
    entities: {
      ...state.entities,
      movies: { ...state.movies, hasErrored: action.hasErrored }
    }
  });
}

function fetchMovies(state, action) {
  return _.merge({}, state, action.entities);
}

function movies(state = {}, action) {
  switch (action.type) {
    case MOVIES_IS_LOADING:
      return moviesIsLoading(state, action);
    case MOVIES_HAS_ERRORED:
      return moviesHasErrored(state, action);
    case FETCH_MOVIE:
      return fetchMovies(state, action);
    default:
      return state;
  }
}

export default movies;
