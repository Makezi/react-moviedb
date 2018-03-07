import React from 'react';
import NowPlayingMoviesCarouselContainer from '../containers/NowPlayingMoviesCarouselContainer';
import PopularMoviesCarouselContainer from "../containers/PopularMoviesCarouselContainer";

const App = () => (
  <div>
    <h1>Movie DB</h1>
    <NowPlayingMoviesCarouselContainer />
    <PopularMoviesCarouselContainer />
  </div>
);

export default App;
