import { FETCH_MOVIE, FETCH_MOVIE_IS_LOADING } from '../constants/action_types';

function fetchMovieIsLoading(state = [], action) {
  return {
    ...state,
    isLoading: action.payload
  };
}

function fetchMovie(state = [], action) {
  console.log(action);
  return state;
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
