import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopularMovies } from '../../actions/categories';
import Header from '../../components/Header/';
import ContentList from '../../components/ContentList/';
import Paginator from '../../components/Paginator';

class PopularMoviesPage extends Component {
  componentDidMount() {
    const page = this.props.match.params.page || 1;
    this.props.fetchPopularMovies(page);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.page != this.props.match.params.page) {
      this.props.fetchPopularMovies(nextProps.match.params.page);
    }
  }

  render() {
    const { moviesList, popularMovies } = this.props;
    const { params } = this.props.match;
    const pageId = params.page || 1;
    const nextPageId = +pageId + 1;
    const prevPageId = +pageId - 1;
    const basePath = '/movie/popular/';
    const { totalPages, totalResults } = popularMovies;

    return (
      <div>
        <Header />
        <ContentList
          categoryList={popularMovies}
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
    popularMovies: state.categories.movies.popular
  };
};

export default connect(mapStateToProps, { fetchPopularMovies })(
  PopularMoviesPage
);
