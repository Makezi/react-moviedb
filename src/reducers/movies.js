import {
  IS_LOADING,
  HAS_ERRORED,
  FETCH_MOVIE
} from '../constants/action_types';
import { isLoading, hasErrored, createReducer } from './helpers';
import _ from 'lodash';

const initialState = {
  byId: {},
  allIds: [],
  isLoading: false,
  hasErrored: false
};

function fetchMovie(state = initialState, action) {
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
    case IS_LOADING:
      return isLoading(state, action);
    case HAS_ERRORED:
      return hasErrored(state, action);
    case FETCH_MOVIE:
      return fetchMovie(state, action);
    default:
      return state;
  }
}
