import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNowPlayingMovies } from '../actions/categories';
import NowPlayingMoviesCarousel from '../components/NowPlayingMoviesCarousel';

class NowPlayingMoviesCarouselContainer extends Component {
  componentDidMount() {
    this.props.fetchNowPlayingMovies();
  }

  render() {
    const { movies } = this.props;
    const { categories } = this.props;

    return <NowPlayingMoviesCarousel categories={categories} movies={movies} />;
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    categories: state.categories
  };
};

export default connect(mapStateToProps, { fetchNowPlayingMovies })(
  NowPlayingMoviesCarouselContainer
);
