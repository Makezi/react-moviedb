import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopularMovies } from '../actions/movies';
// import PopularMoviesList from '../components/PopularMoviesList';

class PopularMoviesListContainer extends Component {
  componentDidMount() {
    // this.props.fetchMovie(this.props.id);
    console.log("HELLO");
    this.props.fetchPopularMovies();
  }

  render() {
    return (
      <div>Hello</div>
      // <MovieDetail
      //   hasErrored={this.props.hasErrored}
      //   isLoading={this.props.isLoading}
      //   movie={this.props.movies.byId[374132]}
      // />
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, { fetchPopularMovies })(
  PopularMoviesListContainer
);
