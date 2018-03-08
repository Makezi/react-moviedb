import React from 'react';
import Header from '../components/Header/';
import NowPlayingMoviesListContainer from '../containers/NowPlayingMoviesListContainer';

const NowPlayingMoviesPage = ({ match }) => (
  <div>
    <Header />
    <NowPlayingMoviesListContainer match={match} />
  </div>
);

export default NowPlayingMoviesPage;
