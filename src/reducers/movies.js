import {
  MOVIE_IS_LOADING,
  FETCH_MOVIE,
  STORE_MOVIE
} from '../constants/action_types';
import { isLoading, isDataStale } from './reducer_helpers';
import _ from 'lodash';

const initialState = {
  byId: {},
  allIds: [],
  isLoading: false,
  lastFetched: 0
};

function fetchMovie(state = initialState, action) {
  let movie = action.payload;
  delete movie['genre_ids'];
  return {
    ...state,
    byId: _.merge({}, state.byId, {
      [action.payload.id]: { ...movie, type: 'movie', lastFetched: Date.now() }
    }),
    allIds: Array.from(new Set([...state.allIds, action.payload.id]))
  };
}

function storeMovie(state = initialState, action) {
  let movie = action.payload;
  delete ['genre_ids'];
  return {
    ...state,
    byId: _.merge({}, state.byId, {
      [action.payload.id]: { ...movie, type: 'movie', lastFetched: 0 }
    }),
    allIds: Array.from(new Set([...state.allIds, action.payload.id]))
  };
}

export function movies(state = initialState, action) {
  switch (action.type) {
    case MOVIE_IS_LOADING:
      return isLoading(state, action);
    case FETCH_MOVIE:
      return fetchMovie(state, action);
    case STORE_MOVIE:
      return storeMovie(state, action);
    default:
      return state;
  }
}
