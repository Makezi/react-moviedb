import React from 'react';
import MovieInfoContainer from '../containers/MovieInfoContainer';

const MoviePage = props => (
  <div>
    <MovieInfoContainer match={props.match} />
  </div>
);

export default MoviePage;
