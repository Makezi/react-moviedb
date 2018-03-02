import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/movies';
import { fetchMovieGenres, fetchShowGenres } from '../actions/genres';
import { fetchNowPlayingMovies } from "../actions/categories";
import MovieDetail from '../components/MovieDetail';

class MovieDetailContainer extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.id);
    this.props.fetchMovieGenres();
    setTimeout(() => console.log("hello"), 1000);
    this.props.fetchShowGenres();
    this.props.fetchNowPlayingMovies();
    this.props.fetchNowPlayingMovies(2);
    this.props.fetchNowPlayingMovies(99);
  }

  render() {
    return (
      <MovieDetail
        hasErrored={this.props.hasErrored}
        isLoading={this.props.isLoading}
        movie={this.props.movies.byId[this.props.id]}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    genres: state.genres
  };
};

export default connect(mapStateToProps, {
  fetchMovie,
  fetchMovieGenres,
  fetchShowGenres,
  fetchNowPlayingMovies
})(MovieDetailContainer);
