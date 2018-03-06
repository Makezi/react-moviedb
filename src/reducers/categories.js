import {
  CATEGORY_IS_LOADING,
  FETCH_NOW_PLAYING_MOVIES
} from '../constants/action_types';
import { isLoading } from './reducer_helpers';
import _ from 'lodash';

const initialState = {
  byId: {},
  allIds: [],
  isLoading: false
};

function fetchNowPlayingMovies(state = initialState, action) {
  if (action.payload.results.length === 0) return state;
  const newPage = {
    nowPlaying: {
      movies: {
        pages: {
          [action.payload.page]: {
            page: action.payload.page,
            ids: action.payload.results.map(movie => movie.id)
          }
        },
        totalPages: action.payload.total_pages,
        totalResults: action.payload.total_results
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
    case CATEGORY_IS_LOADING:
      return isLoading(state, action);
    case FETCH_NOW_PLAYING_MOVIES:
      return fetchNowPlayingMovies(state, action);
    default:
      return state;
  }
}
