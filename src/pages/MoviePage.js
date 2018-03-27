import React from 'react';
import MovieInfoContainer from '../containers/MovieInfoContainer';

const MoviePage = props => (
  <div>
    <MovieInfoContainer params={props.match.params} />
  </div>
);

export default MoviePage;
