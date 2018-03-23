import { FETCH_MOVIE, FETCH_MOVIE_IS_LOADING } from '../constants/action_types';

const initialState = {
  byId: [],
  isLoading: false
};

function fetchMovieIsLoading(state = initialState, action) {
  return {
    ...state,
    isLoading: action.payload
  };
}

function fetchMovie(state = initialState, action) {
  return {
    ...state,
    byId: {
      ...state.byId,
      [action.payload.id]: { ...action.payload, lastFetched: Date.now() }
    }
  };
}

export function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_IS_LOADING:
      return fetchMovieIsLoading(state, action);
    case FETCH_MOVIE:
      return fetchMovie(state, action);
    default:
      return state;
  }
}
