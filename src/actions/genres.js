import axios from 'axios';

export const GENRES_HAS_ERRORED = 'GENRES_HAS_ERRORED';
export const GENRES_IS_LOADING = 'GENRES_IS_LOADING';
export const FETCH_MOVIE_GENRES = 'FETCH_MOVIE_GENRES';
export const FETCH_SHOW_GENRES = "FETCH_SHOW_GENRES";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

export function genresHasErrored(bool) {
  return {
    type: GENRES_HAS_ERRORED,
    hasErrored: bool
  };
}

export function genresIsLoading(bool) {
  return {
    type: GENRES_IS_LOADING,
    isLoading: bool
  };
}

export function fetchMovieGenres() {
  return dispatch => {
    dispatch(genresIsLoading(true));
    axios
      .get(`${BASE_URL}genre/movie/list${API_KEY}`)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(genresIsLoading(false));
        return response;
      })
      .then(response =>
        dispatch({
          type: FETCH_MOVIE_GENRES,
          genres: response.data.genres
        })
      )
      .catch(() => dispatch(genresHasErrored(true)));
  };
}

export function fetchShowGenres() {
  return dispatch => {
    dispatch(genresIsLoading(true));
    axios
      .get(`${BASE_URL}genre/tv/list${API_KEY}`)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(genresIsLoading(false));
        return response;
      })
      .then(response =>
        dispatch({
          type: FETCH_SHOW_GENRES,
          genres: response.data.genres
        })
      )
      .catch(() => dispatch(genresHasErrored(true)));
  };
}
