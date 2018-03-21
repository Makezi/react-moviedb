import { SEARCH_DB } from '../constants/action_types';

const initialState = {
  results: []
};

function fetchSearch(state = initialState, action) {
  const results = action.payload.results.filter(
    result => result.media_type != 'person'
  );
  return {
    ...state,
    results
  };
}

export function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_DB:
      return fetchSearch(state, action);
    default:
      return state;
  }
}
