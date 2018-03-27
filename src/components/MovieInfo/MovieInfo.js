import React, { Component } from 'react';
import Poster from '../../components/Poster/';
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
            {movie.title}{' '}
            {movie.title !== movie.original_title ? movie.original_title : null}
          </h2>
          <ul>
            {movie.genres
              ? movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)
              : ''}
          </ul>
          <p className="overview">{movie.overview}</p>
          <div className="original-release">
            <h3>Original Release</h3>
            <p>{movie.release_date}</p>
          </div>
          <div className="running-time">
            <h3>Running Time</h3>
            <p>{movie.runtime} mins</p>
          </div>
          <div className="box-office">
            <h3>Box Office</h3>
            <p>${movie.revenue}</p>
          </div>
          <div className="vote-average">
            <h3>Voting Average</h3>
            <p>{movie.vote_average} / 10</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieInfo;
