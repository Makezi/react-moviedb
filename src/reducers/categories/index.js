import {
  CATEGORY_IS_LOADING,
  FETCH_NOW_PLAYING_MOVIES,
  FETCH_POPULAR_MOVIES
} from '../../constants/action_types';
import { isLoading } from '../reducer_helpers';
import { popularReducer } from './popular';
import { nowPlayingReducer } from "./now_playing";
import _ from 'lodash';
import { combineReducers } from 'redux';

// const initialState = {
//   byId: {
//     nowPlaying: {
//       isLoading: false
//     },
//     popular: {
//       isLoading: false
//     }
//   },
//   allIds: [],
//   // isLoading: false
// };

// function isLoading(state, action) {
//   console.log(state);
//   return { ...state, isLoading: action.isLoading };
// }

// function fetchNowPlayingMovies(state = initialState, action) {
//   if (action.payload.results.length === 0) return state;
//   const newPage = {
//     nowPlaying: {
//       movies: {
//         pages: {
//           [action.payload.page]: {
//             page: action.payload.page,
//             ids: action.payload.results.map(movie => movie.id)
//           }
//         },
//         totalPages: action.payload.total_pages,
//         totalResults: action.payload.total_results
//       }
//     }
//   };
//   return {
//     ...state,
//     byId: _.merge({}, state.byId, newPage),
//     allIds: Array.from(new Set([...state.allIds, 'now_playing']))
//   };
// }

// function fetchPopularMovies(state = initialState, action) {
//   if (action.payload.results.length === 0) return state;
//   const newPage = {
//     // popular: {
//       movies: {
//         pages: {
//           [action.payload.page]: {
//             page: action.payload.page,
//             ids: action.payload.results.map(movie => movie.id)
//           }
//         },
//         totalPages: action.payload.total_pages,
//         totalResults: action.payload.total_results
//       }
//     // }
//   };
//   return {
//     ...state,
//     byId: _.merge({}, state.byId.popular, newPage),
//     allIds: Array.from(new Set([...state.allIds, 'now_playing']))
//   };
// }

// export function categories(state = initialState, action) {
//   switch (action.type) {
//     case CATEGORY_IS_LOADING:
//       return isLoading(state, action);
//     case FETCH_NOW_PLAYING_MOVIES:
//       return fetchNowPlayingMovies(state, action);
//     case FETCH_POPULAR_MOVIES:
//       return fetchPopularMovies(state, action);
//     default:
//       return state;
//   }
// }

export const categories = combineReducers({
  popular: popularReducer,
  nowPlaying: nowPlayingReducer
});


