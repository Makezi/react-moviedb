import {
  GENRE_IS_LOADING,
  FETCH_MOVIE_GENRES,
  FETCH_SHOW_GENRES
} from '../constants/action_types';
import { isLoading } from './reducer_helpers';
import _ from 'lodash';

const initialState = {
  byId: {},
  allIds: [],
  isLoading: false,
  lastFetched: 0
};

function fetchGenres(state = initialState, action) {
  const mapped = _.mapKeys(action.payload.genres, 'id');
  return {
    ...state,
    byId: _.merge({}, state.byId, mapped),
    allIds: Array.from(new Set([...state.allIds, ...Object.keys(mapped)])),
    lastFetched: Date.now()
  };
}

export function genres(state = initialState, action) {
  switch (action.type) {
    case GENRE_IS_LOADING:
      return isLoading(state, action);
    case FETCH_MOVIE_GENRES:
    case FETCH_SHOW_GENRES:
      return fetchGenres(state, action);
    default:
      return state;
  }
}
