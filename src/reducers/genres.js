import {
  IS_LOADING,
  HAS_ERRORED,
  FETCH_MOVIE_GENRES,
  FETCH_SHOW_GENRES
} from '../constants/action_types';
import { isLoading, hasErrored } from './reducer_helpers';
import _ from 'lodash';

const initialState = {
  byId: {},
  allIds: [],
  isLoading: false,
  hasErrored: false
};

function fetchGenres(state = initialState, action) {
  const mapped = _.mapKeys(action.payload.genres, 'id');
  return {
    ...state,
    byId: _.merge({}, state.byId, mapped),
    allIds: Array.from(new Set([...state.allIds, ...Object.keys(mapped)]))
  };
}

export function genres(state = initialState, action) {
  switch (action.type) {
    case IS_LOADING:
      return isLoading(state, action);
    case HAS_ERRORED:
      return hasErrored(state, action);
    case FETCH_MOVIE_GENRES:
    case FETCH_SHOW_GENRES:
      return fetchGenres(state, action);
    default:
      return state;
  }
}
