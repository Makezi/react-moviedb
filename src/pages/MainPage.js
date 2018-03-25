import React from 'react';
import MovieInfoContainer from '../containers/MovieInfoContainer';

const MainPage = props => (
  <div>
    <MovieInfoContainer params={props.match.params} history={props.history} />
  </div>
);

export default MainPage;
