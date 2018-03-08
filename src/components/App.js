import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';
import NowPlayingMoviesPage from "../pages/NowPlayingMoviesPage";
import ShowPage from '../pages/ShowPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movie/now-playing/:page" component={NowPlayingMoviesPage} />
      <Route path="/movie/now-playing/" component={NowPlayingMoviesPage} />
      <Route path="/movie/:id" component={MoviePage} />
      <Route path="/show/:id" component={ShowPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
