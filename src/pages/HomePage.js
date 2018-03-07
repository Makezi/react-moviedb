import React from "react";
import NowPlayingMoviesCarouselContainer from '../containers/NowPlayingMoviesCarouselContainer';
import PopularMoviesCarouselContainer from '../containers/PopularMoviesCarouselContainer';
import OnTheAirShowCarouselContainer from '../containers/OnTheAirShowsCarouselContainer';


const HomePage = () => (
  <div>
    <h1>Movie DB</h1>
    <NowPlayingMoviesCarouselContainer />
    <PopularMoviesCarouselContainer />
    <OnTheAirShowCarouselContainer />
  </div>
);

export default HomePage;