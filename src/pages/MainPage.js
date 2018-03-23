import React from 'react';
import MovieInfoContainer from '../containers/MovieInfoContainer';

const MainPage = props => (
  <div>
    <MovieInfoContainer params={props.match.params} />
  </div>
);

export default MainPage;
