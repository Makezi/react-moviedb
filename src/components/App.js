import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';
import NowPlayingMoviesPage from "../containers/pages/NowPlayingMoviesPage";
import PopularMoviesPage from "../containers/pages/PopularMoviesPage";
import OnTheAirShowsPage from "../containers/pages/OnTheAirShowsPage";
import ShowPage from '../pages/ShowPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movie/now-playing/:page" component={NowPlayingMoviesPage} />
      <Route path="/movie/now-playing/" component={NowPlayingMoviesPage} />
      <Route path="/movie/popular/:page" component={PopularMoviesPage} />
      <Route path="/movie/popular/" component={PopularMoviesPage} />
      <Route path="/show/on-air/:page" component={OnTheAirShowsPage} />
      <Route path="/show/on-air/" component={OnTheAirShowsPage} />
      <Route path="/movie/:id" component={MoviePage} />
      <Route path="/show/:id" component={ShowPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
