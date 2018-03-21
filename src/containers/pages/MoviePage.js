import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../../actions/movies';
import ContentDetail from '../../components/ContentDetail';

class MoviePage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovie(id);
  }

  render() {
    const { moviesList } = this.props;
    const { isLoading } = moviesList;
    const { id } = this.props.match.params;
    const content = moviesList.byId[id];
    return (
      <div>
        <ContentDetail isLoading={isLoading} content={content} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesList: state.movies
  };
};

export default connect(mapStateToProps, { fetchMovie })(MoviePage);
