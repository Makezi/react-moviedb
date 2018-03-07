import React from 'react';
import MovieDetailContainer from '../containers/MovieDetailContainer';

const MoviePage = ({ match }) => (
  <div>
    <MovieDetailContainer id={match.params.id} />
  </div>
);

export default MoviePage;
