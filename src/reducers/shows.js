import { SHOW_IS_LOADING, FETCH_SHOW, STORE_SHOW } from '../constants/action_types';
import { isLoading } from './reducer_helpers';
import _ from 'lodash';

const initialState = {
  byId: {},
  allIds: [],
  isLoading: false,
  lastFetched: 0
};

function fetchShow(state = initialState, action) {
  let genres = action.payload.genres
    ? action.payload.genres.map(genre => genre.id)
    : action.payload_genre_ids;
  let show = action.payload;
  delete show['genre_ids'];
  return {
    ...state,
    byId: _.merge({}, state.byId, {
      [action.payload.id]: { ...show, genres }
    }),
    allIds: Array.from(new Set([...state.allIds, action.payload.id])),
    lastFetched: Date.now()
  };
}

export function shows(state = initialState, action) {
  switch (action.type) {
    case SHOW_IS_LOADING:
      return isLoading(state, action);
    case FETCH_SHOW:
    case STORE_SHOW:
      return fetchShow(state, action);
    default:
      return state;
  }
}
