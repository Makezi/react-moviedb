import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopularMovies } from '../actions/categories';
import PopularMoviesCarousel from '../components/PopularMoviesCarousel';

class PopularMoviesCarouselContainer extends Component {
  componentDidMount() {
    this.props.fetchPopularMovies();
  }

  render() {
    const { moviesList } = this.props;
    const { categoryList } = this.props;

    return (
      <PopularMoviesCarousel
        categoryList={categoryList}
        moviesList={moviesList}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesList: state.movies,
    categoryList: state.categories.movies["popular"]
  };
};

export default connect(mapStateToProps, { fetchPopularMovies })(
  PopularMoviesCarouselContainer
);
