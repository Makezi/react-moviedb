import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNowPlayingMovies } from '../actions/categories';
import NowPlayingMoviesList from '../components/NowPlayingMoviesList/';

class NowPlayingMoviesListContainer extends Component {
  componentDidMount() {
    // console.log(this.props.match.params.page);
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

    return (
      <div>
        <NowPlayingMoviesList
          categoryList={categoryList}
          moviesList={moviesList}
          pageId={this.props.match.params.page || 1}
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
