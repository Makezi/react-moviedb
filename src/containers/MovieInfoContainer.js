import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/movies_actions';
import MovieInfo from '../components/MovieInfo/';

const MOVIE_ID = 284054;

class MovieInfoContainer extends Component {
  componentDidMount() {
    this.props.fetchMovie(MOVIE_ID);
  }

  render() {
    const { isLoading, byId } = this.props.movie;
    return (
      <Fragment>
        <MovieInfo isLoading={isLoading} movie={byId[MOVIE_ID]} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movies
  };
};

export default connect(mapStateToProps, { fetchMovie })(MovieInfoContainer);
