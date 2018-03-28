import React from 'react';
import { Link } from 'react-router-dom';
import Poster from '../Poster';
import moment from 'moment';
import './MovieCard.css';

const MovieCard = ({ movie }) => (
  <Link to={`/movie/${movie.id}`}>
    <div className="movie-card">
      <Poster img={movie.poster_path} />
      <div className="movie-details">
        <span className="title">{movie.original_title || movie.title}</span>
        {movie.release_date ? (
          <span className="release-date">
            {moment(movie.release_date).format('YYYY')}
          </span>
        ) : null}
        {movie.overview ? (
          <span className="overview">{movie.overview}</span>
        ) : null}
        {movie.vote_average ? (
          <span className="vote-average">{movie.vote_average * 10}%</span>
        ) : null}
      </div>
    </div>
  </Link>
);

export default MovieCard;
