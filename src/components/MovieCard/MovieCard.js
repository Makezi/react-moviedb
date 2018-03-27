import React from 'react';
import Poster from '../Poster';
import './MovieCard.css';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <Poster img={movie.poster_path}>
      <span className="title">{movie.original_title}</span>
    </Poster>
  </div>
);

export default MovieCard;
