import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNowPlayingMovies } from '../actions/categories';
import NowPlayingMoviesCarousel from '../components/NowPlayingMoviesCarousel';

class NowPlayingMoviesCarouselContainer extends Component {
  componentDidMount() {
    this.props.fetchNowPlayingMovies();
  }

  render() {
    const { moviesList } = this.props;
    const { categoryList } = this.props;

    return (
      <NowPlayingMoviesCarousel
        categoryList={categoryList}
        moviesList={moviesList}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesList: state.movies,
    categoryList: state.categories.movies['nowPlaying']
  };
};

export default connect(mapStateToProps, { fetchNowPlayingMovies })(
  NowPlayingMoviesCarouselContainer
);
