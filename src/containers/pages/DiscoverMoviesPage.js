import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDiscoverMovies } from '../../actions/discovers';
import ContentList from '../../components/ContentList/';
import Paginator from '../../components/Paginator';

class DiscoverMoviesPage extends Component {
  componentDidMount() {
    const page = this.props.match.params.page || 1;
    this.props.fetchDiscoverMovies(page);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.page !== this.props.match.params.page) {
      this.props.fetchDiscoverMovies(nextProps.match.params.page);
    }
  }

  render() {
    const { moviesList, discoverMoviesList } = this.props;
    const { params, path } = this.props.match;
    const basePath = path.substring(0, path.indexOf(':'));
    const pageId = params.page || 1;
    const nextPageId = +pageId + 1;
    const prevPageId = +pageId - 1;
    const { totalPages, totalResults } = discoverMoviesList;

    return (
      <div>
        <ContentList
          categoryList={discoverMoviesList}
          contentList={moviesList}
          pageId={pageId}
        />
        <Paginator
          basePath={basePath}
          prevPageId={prevPageId}
          nextPageId={nextPageId}
          totalPages={totalPages}
          totalResults={totalResults}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesList: state.movies,
    discoverMoviesList: state.discovers.movies
  };
};

export default connect(mapStateToProps, { fetchDiscoverMovies })(
  DiscoverMoviesPage
);
