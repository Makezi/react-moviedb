import {
  NOW_PLAYING_MOVIES_IS_LOADING,
  POPULAR_MOVIES_IS_LOADING,
  FETCH_NOW_PLAYING_MOVIES,
  FETCH_POPULAR_MOVIES
} from '../../constants/action_types';
import _ from 'lodash';

const initialState = {
  nowPlaying: {
    pages: {},
    totalPages: 0,
    totalResults: 0,
    isLoading: false,
    lastFetched: 0
  },
  popular: {
    pages: {},
    totalPages: 0,
    totalResults: 0,
    isLoading: false,
    lastFetched: 0
  }
};

function isLoading(state, action, category) {
  return {
    ...state,
    [category]: { ...state[category], isLoading: action.isLoading }
  };
}

function fetchCategory(state = initialState, action, category) {
  return {
    ...state,
    [category]: _.merge({}, state[category], {
      pages: {
        [action.payload.page]: {
          page: action.payload.page,
          ids: action.payload.results.map(movie => movie.id)
        }
      },
      totalPages: action.payload.total_pages,
      totalResults: action.payload.total_results,
      isLoading: state[category].isLoading,
      lastFetched: Date.now()
    })
  };
}

export function movieCategoriesReducer(state = initialState, action) {
  switch (action.type) {
    case NOW_PLAYING_MOVIES_IS_LOADING:
      return isLoading(state, action, 'nowPlaying');
    case POPULAR_MOVIES_IS_LOADING:
      return isLoading(state, action, 'popular');
    case FETCH_NOW_PLAYING_MOVIES:
      return fetchCategory(state, action, "nowPlaying");
    case FETCH_POPULAR_MOVIES:
      return fetchCategory(state, action, "popular");
    default:
      return state;
  }
}
