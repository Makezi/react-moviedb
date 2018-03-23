import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/movies_actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchMovie(284054);
  }

  render() {
    return <div>Test</div>;
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movies
  };
};

export default connect(mapStateToProps, { fetchMovie })(App);
