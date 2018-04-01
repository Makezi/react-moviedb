import React from 'react';
import { Link } from 'react-router-dom';
import Poster from '../Poster';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './MovieCard.scss';

const MovieCard = ({ movie }) => (
  <Link className={styles.card} to={`/react-moviedb/movie/${movie.id}`}>
    <Poster img={movie.poster_path} title={movie.original_title} />
    <div className={styles.details}>
      {movie.vote_average ? (
        <span className={styles.voteAverage}>{movie.vote_average * 10}%</span>
      ) : null}
      <span className={styles.title}>
        {`${movie.title} (${moment(movie.release_date).format('YYYY') ||
          null})`}
      </span>
    </div>
  </Link>
);

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
