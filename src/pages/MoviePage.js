import React, { Fragment } from 'react';
import MovieInfoContainer from '../containers/MovieInfoContainer';

const MoviePage = props => (
  <Fragment>
    <MovieInfoContainer match={props.match} />
  </Fragment>
);

export default MoviePage;
