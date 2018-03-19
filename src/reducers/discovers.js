import {
  DISCOVER_MOVIES_IS_LOADING,
  DISCOVER_SHOWS_IS_LOADING,
  FETCH_DISCOVER_MOVIES,
  FETCH_DISCOVER_SHOWS,
} from '../constants/action_types';
import _ from 'lodash';

const initialState = {
  movies: {
    pages: {},
    totalPages: 0,
    totalResults: 0,
    isLoading: false
  },
  shows: {
    pages: {},
    totalPages: 0,
    totalResults: 0,
    isLoading: false
  }
};

function isLoading(state, action, type) {
  return {
    ...state,
    [type]: { ...state[type], isLoading: action.isLoading }
  };
}

function fetchDiscover(state = initialState, action, type) {
  return {
    ...state,
    [type]: _.merge({}, state[type], {
      pages: {
        ...state.pages,
        [action.payload.page]: {
          page: action.payload.page,
          ids: action.payload.results.map(content => content.id),
          lastFetched: Date.now()
        }
      },
      totalPages: action.payload.total_pages,
      totalResults: action.payload.total_results,
      isLoading: state[type].isLoading
    })
  };
}

export function discovers(state = initialState, action) {
  switch (action.type) {
    case DISCOVER_MOVIES_IS_LOADING:
      return isLoading(state, action, 'movies');
    case DISCOVER_SHOWS_IS_LOADING:
      return isLoading(state, action, 'shows');
    case FETCH_DISCOVER_MOVIES:
      return fetchDiscover(state, action, 'movies');
    case FETCH_DISCOVER_SHOWS:
      return fetchDiscover(state, action, 'shows');
    default:
      return state;
  }
}
