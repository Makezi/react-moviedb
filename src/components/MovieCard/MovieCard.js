import React from 'react';
import { Link } from 'react-router-dom';
import Poster from '../Poster';
import './MovieCard.css';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <Poster img={movie.poster_path}>
      <Link to={`/movie/${movie.id}`}>
        <span className="title">{movie.original_title}</span>
      </Link>
    </Poster>
  </div>
);

export default MovieCard;
