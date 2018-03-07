import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShow } from '../actions/shows';

import ShowDetail from '../components/ShowDetail';

class ShowDetailContainer extends Component {
  componentDidMount() {
    const { shows, id } = this.props;
    if (!shows.byId[id]) this.props.fetchShow(id);
  }

  render() {
    const { shows } = this.props;
    return (
      <div>
        <ShowDetail
          isLoading={shows.isLoading}
          show={shows.byId[this.props.id]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shows: state.shows,
    genres: state.genres
  };
};

export default connect(mapStateToProps, { fetchShow})(ShowDetailContainer);
