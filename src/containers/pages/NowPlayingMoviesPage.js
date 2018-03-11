import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNowPlayingMovies } from '../../actions/categories';
import Header from '../../components/Header/';
import ContentList from '../../components/ContentList/';
import Paginator from '../../components/Paginator';

class NowPlayingMoviesPage extends Component {
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
    const { moviesList, nowPlayingMovies } = this.props;
    const { params } = this.props.match;
    const pageId = params.page || 1;
    const nextPageId = +pageId + 1;
    const prevPageId = +pageId - 1;
    const basePath = '/movie/now-playing/';
    const { totalPages, totalResults } = nowPlayingMovies;

    return (
      <div>
        <Header />
        <ContentList
          categoryList={nowPlayingMovies}
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
    nowPlayingMovies: state.categories.movies.nowPlaying
  };
};

export default connect(mapStateToProps, { fetchNowPlayingMovies })(
  NowPlayingMoviesPage
);
