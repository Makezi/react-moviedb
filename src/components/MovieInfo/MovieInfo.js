import React, { Component } from 'react';
import Poster from '../../components/Poster/';
import moment from 'moment';
// import { BASE_API_IMG_URL } from '../../constants/api';
import './MovieInfo.css';

class MovieInfo extends Component {
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.movie !== nextProps.movie) {
  //     document.body.style.backgroundImage = `url(${BASE_API_IMG_URL}${
  //       nextProps.movie.poster_path
  //     })`;
  //   }
  // }

  render() {
    const { isLoading, hasErrored, movie } = this.props;
    if (hasErrored) return <div>There was an error</div>;
    if (isLoading || !movie) return <div>Loading...</div>;
    return (
      <div className="movie-info">
        <Poster title={movie.original_title} img={movie.poster_path} />
        <div className="movie-metadata">
          <h2 className="title">
            {movie.original_title && movie.original_title !== movie.title
              ? `${movie.original_title} (${movie.title})`
              : movie.title}
          </h2>
          <p className="overview">{movie.overview}</p>
          <div className="vote-average">
            <h3>Voting Average</h3>
            <p>{movie.vote_average * 10}%</p>
          </div>
          <div className="original-release">
            <h3>Original Release</h3>
            <p>{moment(movie.release_date).format('MMMM D, YYYY')}</p>
          </div>
          <div className="running-time">
            <h3>Running Time</h3>
            <p>{movie.runtime === 0 ? '-' : `${movie.runtime} mins`}</p>
          </div>
          <div className="budget">
            <h3>Budget</h3>
            {movie.budget === 0
              ? '-'
              : `$${Number(movie.budget).toLocaleString()}`}
          </div>
          <div className="revenue">
            <h3>Revenue</h3>
            <p>
              {movie.revenue === 0
                ? '-'
                : `$${Number(movie.revenue).toLocaleString()}`}
            </p>
          </div>
          <div className="genres">
            <h3>Genres</h3>
            {movie.genres
              ? movie.genres.map(genre => (
                  <span key={genre.id}>{genre.name}</span>
                ))
              : '-'}
          </div>
          <ul />
        </div>
      </div>
    );
  }
}

export default MovieInfo;
