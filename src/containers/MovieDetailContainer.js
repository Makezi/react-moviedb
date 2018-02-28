import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/movies';
import MovieDetail from '../components/MovieDetail';

class MovieDetailContainer extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.id);
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

export default connect(mapStateToProps, { fetchMovie })(MovieDetailContainer);
