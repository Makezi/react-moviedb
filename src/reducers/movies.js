import { MOVIE_IS_LOADING, FETCH_MOVIE, STORE_MOVIE } from '../constants/action_types';
import { isLoading } from './reducer_helpers';
import _ from 'lodash';

const initialState = {
  byId: {},
  allIds: [],
  isLoading: false
};

function fetchMovie(state = initialState, action) {
  let genres = action.payload.genres
    ? action.payload.genres.map(genre => genre.id)
    : action.payload_genre_ids;
  let movie = action.payload;
  delete movie['genre_ids'];
  return {
    ...state,
    byId: _.merge({}, state.byId, {
      [action.payload.id]: { ...movie, genres }
    }),
    allIds: Array.from(new Set([...state.allIds, action.payload.id]))
  };
}

export function movies(state = initialState, action) {
  switch (action.type) {
    case MOVIE_IS_LOADING:
      return isLoading(state, action);
    case FETCH_MOVIE:
    case STORE_MOVIE:
      return fetchMovie(state, action);
    default:
      return state;
  }
}
