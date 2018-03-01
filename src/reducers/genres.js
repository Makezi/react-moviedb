import {
  GENRES_HAS_ERRORED,
  GENRES_IS_LOADING,
  FETCH_MOVIE_GENRES,
  FETCH_SHOW_GENRES
} from '../actions/genres';
import _ from 'lodash';

const initialState = {
  byId: {},
  allIds: [],
  isLoading: false,
  hasErrored: false
};

function genresIsLoading(state, action) {
  return { ...state, isLoading: action.isLoading };
}

function genresHasErrored(state, action) {
  return { ...state, hasErrored: action.hasErrored };
}

function fetchGenres(state, action) {
  const mapped = _.mapKeys(action.genres, 'id');
  return {
    ...state,
    byId: _.merge({}, state.byId, mapped),
    allIds: Array.from(new Set([...state.allIds, ...Object.keys(mapped)]))
  };
}

export function genres(state = initialState, action) {
  switch (action.type) {
    case GENRES_IS_LOADING:
      return genresIsLoading(state, action);
    case GENRES_HAS_ERRORED:
      return genresHasErrored(state, action);
    case FETCH_MOVIE_GENRES:
    case FETCH_SHOW_GENRES:
      return fetchGenres(state, action);
    default:
      return state;
  }
}
