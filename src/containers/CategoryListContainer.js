import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchOnTheAirShows
} from '../actions/categories';
import CategoryCarousel from '../components/CategoryCarousel';

class CategoryListContainer extends Component {
  componentDidMount() {
    this.props.fetchNowPlayingMovies();
    this.props.fetchPopularMovies();
    this.props.fetchOnTheAirShows();
  }

  render() {
    const {
      nowPlayingMovies,
      popularMovies,
      onTheAirShows,
      moviesList,
      showsList
    } = this.props;

    return (
      <div className="categories-list">
        <CategoryCarousel
          title={'Now Playing Movies'}
          viewMoreUrl={'/movie/now-playing/1'}
          categoryList={nowPlayingMovies}
          contentList={moviesList}
        />
        <CategoryCarousel
          title={'Popular Movies'}
          viewMoreUrl={'/movie/popular/1'}
          categoryList={popularMovies}
          contentList={moviesList}
        />
        <CategoryCarousel
          title={'On The Air Shows'}
          viewMoreUrl={'/show/on-air/1'}
          categoryList={onTheAirShows}
          contentList={showsList}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    nowPlayingMovies: state.categories.movies.nowPlaying,
    popularMovies: state.categories.movies.popular,
    onTheAirShows: state.categories.shows.onTheAir,
    moviesList: state.movies,
    showsList: state.shows
  };
};

export default connect(mapStateToProps, {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchOnTheAirShows
})(CategoryListContainer);
