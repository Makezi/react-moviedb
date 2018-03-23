import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/movies_actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchMovie(3);
  }

  render() {
    return <div>Test</div>;
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie
  };
};

export default connect(mapStateToProps, { fetchMovie })(App);
