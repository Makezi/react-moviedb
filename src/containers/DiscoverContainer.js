import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchDiscoverMovies } from '../actions/discover_actions';

class DiscoverContainer extends Component {
  componentDidMount() {
    const page = this.props.params.page || 1;
    this.props.fetchDiscoverMovies(page);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params !== this.props.params) {
      this.props.fetchDiscoverMovies(nextProps.params.page);
    }
  }

  render() {
    return <div>DISCOVER MOVIES HERE!!!</div>;
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movies,
    discover: state.discover
  };
};

export default connect(mapStateToProps, { fetchDiscoverMovies })(
  DiscoverContainer
);
