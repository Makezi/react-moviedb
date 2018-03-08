import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNowPlayingMovies } from '../actions/categories';
import NowPlayingMoviesList from '../components/NowPlayingMoviesList/';
import Paginator from '../components/Paginator';

class NowPlayingMoviesListContainer extends Component {
  componentDidMount() {
    const page = this.props.match.params.page || 1;
    this.props.fetchNowPlayingMovies(page);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.page != this.props.match.params.page) {
      this.props.fetchNowPlayingMovies(nextProps.match.params.page);
    }
  }

  render() {
    const { moviesList } = this.props;
    const { categoryList } = this.props;
    const { params } = this.props.match;
    const pageId = params.page || 1;
    const nextPageId = +pageId + 1;
    const prevPageId = +pageId - 1;
    const basePath = "/movie/now-playing/";
    const { totalPages, totalResults } = categoryList;

    return (
      <div>
        <NowPlayingMoviesList
          categoryList={categoryList}
          moviesList={moviesList}
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
    categoryList: state.categories.movies['nowPlaying']
  };
};

export default connect(mapStateToProps, { fetchNowPlayingMovies })(
  NowPlayingMoviesListContainer
);
