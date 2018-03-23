import { FETCH_MOVIE, FETCH_MOVIE_IS_LOADING } from '../constants/action_types';

function fetchMovieIsLoading(state = [], action) {
  return {
    ...state,
    isLoading: action.payload
  };
}

function fetchMovie(state = [], action) {
  return {
    ...state,
    byId: { ...state.byId, [action.payload.id]: action.payload }
  };
}

export function moviesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIE_IS_LOADING:
      return fetchMovieIsLoading(state, action);
    case FETCH_MOVIE:
      return fetchMovie(state, action);
    default:
      return state;
  }
}
