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
    isLoading: false
  },
  popular: {
    pages: {},
    totalPages: 0,
    totalResults: 0,
    isLoading: false
  }
};

function isLoading(state, action, category) {
  return {
    ...state,
    [category]: { ...state[category], isLoading: action.isLoading }
  };
}

function fetchNowPlayingMovies(state = initialState, action) {
  return {
    ...state,
    nowPlaying: _.merge({}, state.nowPlaying, {
      pages: {
        [action.payload.page]: {
          page: action.payload.page,
          ids: action.payload.results.map(movie => movie.id)
        }
      },
      totalPages: action.payload.total_pages,
      totalResults: action.payload.total_results,
      isLoading: state.nowPlaying.isLoading
    })
  };
}

function fetchPopularMovies(state = initialState, action) {
  return {
    ...state,
    popular: _.merge({}, state.popular, {
      pages: {
        [action.payload.page]: {
          page: action.payload.page,
          ids: action.payload.results.map(movie => movie.id)
        }
      },
      totalPages: action.payload.total_pages,
      totalResults: action.payload.total_results,
      isLoading: state.popular.isLoading
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
      return fetchNowPlayingMovies(state, action);
    case FETCH_POPULAR_MOVIES:
      return fetchPopularMovies(state, action);
    default:
      return state;
  }
}
