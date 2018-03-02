import {
  IS_LOADING,
  HAS_ERRORED,
  FETCH_MOVIE
} from '../constants/action_types';
import { isLoading, hasErrored } from './reducer_helpers';
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
      [action.payload.id]: {
        ...action.payload,
        genres: action.payload.genres.map(genre => genre.id)
      }
    }),
    allIds: Array.from(new Set([...state.allIds, action.payload.id]))
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
