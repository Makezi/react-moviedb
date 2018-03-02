import {
  IS_LOADING,
  HAS_ERRORED,
  FETCH_NOW_PLAYING_MOVIES
} from '../constants/action_types';
import { isLoading, hasErrored } from './reducer_helpers';
import _ from 'lodash';

const initialState = {
  byId: {},
  allIds: [],
  isLoading: false,
  hasErrored: false
};

function fetchNowPlayingMovies(state = initialState, action) {
  if (action.payload.results.length === 0) return state;
  const newPage = {
    now_playing: {
      movies: {
        pages: {
          [action.payload.page]: {
            page: action.payload.page,
            ids: action.payload.results.map(movie => movie.id)
          }
        },
        total_pages: action.payload.total_pages,
        total_results: action.payload.total_results
      }
    }
  };
  return {
    ...state,
    byId: _.merge({}, state.byId, newPage),
    allIds: Array.from(new Set([...state.allIds, 'now_playing']))
  };
}

export function categories(state = initialState, action) {
  switch (action.type) {
    case IS_LOADING:
      return isLoading(state, action);
    case HAS_ERRORED:
      return hasErrored(state, action);
    case FETCH_NOW_PLAYING_MOVIES:
      return fetchNowPlayingMovies(state, action);
    default:
      return state;
  }
}
