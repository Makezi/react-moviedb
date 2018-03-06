import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNowPlayingMovies } from '../actions/categories';
// import PopularMoviesList from '../components/PopularMoviesList';

class NowPlayingMoviesCarouselContainer extends Component {
  componentDidMount() {
    this.props.fetchNowPlayingMovies();
  }

  render() {
    const { isLoading, allIds } = this.props.categories;
    if (isLoading || allIds.length === 0) return <div>Loading...</div>;
    const movieIds = this.props.categories.byId.nowPlaying.movies.pages[1].ids;
    const movies = movieIds.map(id => this.props.movies.byId[id]);

    return (
      <div>
        <ul>
          {movies.map(
            movie => (movie ? <li key={movie.id}>{movie.title}</li> : '')
          )}
        </ul>
      </div>
    );
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
