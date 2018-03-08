import {
  ON_THE_AIR_SHOWS_IS_LOADING,
  FETCH_ON_THE_AIR_SHOWS,
} from '../../constants/action_types';
import _ from 'lodash';

const initialState = {
  onTheAir: {
    pages: {},
    totalPages: 0,
    totalResults: 0,
    isLoading: false,
  },
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
          ids: action.payload.results.map(movie => movie.id),
          lastFetched: Date.now()
        }
      },
      totalPages: action.payload.total_pages,
      totalResults: action.payload.total_results,
      isLoading: state[category].isLoading,
    })
  };
}

export function showCategoriesReducer(state = initialState, action) {
  switch (action.type) {
    case ON_THE_AIR_SHOWS_IS_LOADING:
      return isLoading(state, action, 'onTheAir');
    case FETCH_ON_THE_AIR_SHOWS:
      return fetchCategory(state, action, "onTheAir");
    default:
      return state;
  }
}
