import React from "react";
import Header from "../components/Header/";
import NowPlayingMoviesCarouselContainer from '../containers/NowPlayingMoviesCarouselContainer';
import PopularMoviesCarouselContainer from '../containers/PopularMoviesCarouselContainer';
import OnTheAirShowCarouselContainer from '../containers/OnTheAirShowsCarouselContainer';

const HomePage = () => (
  <div>
    <Header />
    <NowPlayingMoviesCarouselContainer />
    <PopularMoviesCarouselContainer />
    <OnTheAirShowCarouselContainer />
  </div>
);

export default HomePage;