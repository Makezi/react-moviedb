import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/movies';

import MovieDetail from '../components/MovieDetail';

class MovieDetailContainer extends Component {
  componentDidMount() {
    const { movies, id } = this.props;
    if (!movies.byId[id]) this.props.fetchMovie(id);
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <MovieDetail
          isLoading={movies.isLoading}
          movie={movies.byId[this.props.id]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    genres: state.genres
  };
};

export default connect(mapStateToProps, { fetchMovie })(MovieDetailContainer);
