import {
  POPULAR_MOVIES_IS_LOADING,
  SHOW_CATEGORY_IS_LOADING,
  FETCH_POPULAR_MOVIES
} from '../../constants/action_types';
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

function movieIsLoading(state, action) {
  return { ...state, movies: { ...state.movies, isLoading: action.isLoading } };
}

function showIsLoading(state, action) {
  return { ...state, shows: { ...state.shows, isLoading: action.isLoading } };
}

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

function fetchPopularMovies(state = initialState, action) {

  return {
    ...state,
    movies: {
      ...state.movies.pages,
      pages: {
        ...state.movies.pages,
        [action.payload.page]: {
          page: action.payload.page,
          ids: action.payload.results.map(movie => movie.id)
        }
      },
      totalPages: action.payload.total_pages,
      totalResults: action.payload.total_results,
      isLoading: state.movies.isLoading
    }
  };
  // if (action.payload.results.length === 0) return state;
  // const newPage = {
  //   // popular: {
  //   movies: {
  //     pages: {
  //       [action.payload.page]: {
  //         page: action.payload.page,
  //         ids: action.payload.results.map(movie => movie.id)
  //       }
  //     },
  //     totalPages: action.payload.total_pages,
  //     totalResults: action.payload.total_results
  //   }
  //   // }
  // };
  // return {
  //   ...state,
  //   byId: _.merge({}, state.byId, newPage),
  //   allIds: Array.from(new Set([...state.allIds, 'now_playing']))
  // };
}

export function popularReducer(state = initialState, action) {
  switch (action.type) {
    case POPULAR_MOVIES_IS_LOADING:
      return movieIsLoading(state, action);
    // case SHOW_CATEGORY_IS_LOADING:
    //   return showIsLoading(state, action);
    case FETCH_POPULAR_MOVIES:
      return fetchPopularMovies(state, action);
    default:
      return state;
  }
}
