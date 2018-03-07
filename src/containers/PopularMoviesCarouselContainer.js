import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopularMovies } from '../actions/categories';
import PopularMoviesCarousel from '../components/PopularMoviesCarousel';

class PopularMoviesCarouselContainer extends Component {
  componentDidMount() {
    this.props.fetchPopularMovies();
  }

  render() {
    const { moviesInfo } = this.props;
    const { popularList } = this.props;

    return (
      <PopularMoviesCarousel
        categoryList={popularList}
        moviesInfo={moviesInfo}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesInfo: state.movies,
    popularList: state.categories.popular.movies
  };
};

export default connect(mapStateToProps, { fetchPopularMovies })(
  PopularMoviesCarouselContainer
);
