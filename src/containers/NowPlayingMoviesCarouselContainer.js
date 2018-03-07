import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNowPlayingMovies } from '../actions/categories';
import NowPlayingMoviesCarousel from '../components/NowPlayingMoviesCarousel';

class NowPlayingMoviesCarouselContainer extends Component {
  componentDidMount() {
    this.props.fetchNowPlayingMovies();
  }
  
  render() {
    const { moviesInfo } = this.props;
    const { nowPlayingList } = this.props;

    return (
      <NowPlayingMoviesCarousel
        categoryList={nowPlayingList}
        moviesInfo={moviesInfo}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesInfo: state.movies,
    nowPlayingList: state.categories.nowPlaying.movies
  };
};

export default connect(mapStateToProps, { fetchNowPlayingMovies })(
  NowPlayingMoviesCarouselContainer
);