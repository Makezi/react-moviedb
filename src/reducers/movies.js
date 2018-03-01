import _ from 'lodash';
import {
  MOVIES_HAS_ERRORED,
  MOVIES_IS_LOADING,
  FETCH_MOVIE
} from '../actions/movies';

const initialState = {
  byId: {},
  allIds: [],
  isLoading: false,
  hasErrored: false
};

function moviesIsLoading(state, action) {
  return { ...state, isLoading: action.isLoading };
}

function moviesHasErrored(state, action) {
  return { ...state, hasErrored: action.hasErrored };
}

function fetchMovie(state, action) {
  return {
    ...state,
    byId: _.merge({}, state.byId, {
      [action.movie.id]: {
        ...action.movie,
        genres: _.mapKeys(action.movie.genres, 'id')
      }
    }),
    allIds: Array.from(new Set([...state.allIds, action.movie.id]))
  };
}

export function movies(state = initialState, action) {
  switch (action.type) {
    case MOVIES_IS_LOADING:
      return moviesIsLoading(state, action);
    case MOVIES_HAS_ERRORED:
      return moviesHasErrored(state, action);
    case FETCH_MOVIE:
      return fetchMovie(state, action);
    default:
      return state;
  }
}
