import React from 'react';
import { Link } from 'react-router-dom';
import Poster from '../Poster';
import moment from 'moment';
import styles from './MovieCard.scss';

const MovieCard = ({ movie }) => (
  <div className={styles.card}>
    <Link to={`/movie/${movie.id}`}>
      <Poster img={movie.poster_path} title={movie.original_title} />
      <div className={styles.details}>
        {movie.vote_average ? (
          <span className={styles.voteAverage}>{movie.vote_average * 10}%</span>
        ) : null}
        <span className={styles.title}>
          {`${movie.title} (${moment(
            movie.release_date
          ).format('YYYY') || null})`}
        </span>
      </div>
    </Link>
  </div>
);

export default MovieCard;
