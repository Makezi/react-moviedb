import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DiscoverMoviesPage from '../containers/pages/DiscoverMoviesPage';
import DiscoverShowsPage from '../containers/pages/DiscoverShowsPage';
import MoviePage from '../containers/pages/MoviePage';
import ShowPage from '../containers/pages/ShowPage';
import CategoryPage from '../containers/pages/CategoryPage';
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchOnTheAirShows
} from '../actions/categories';

const Main = () => (
  <main>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/movie/now-playing/:page"
        render={props => (
          <CategoryPage
            {...props}
            namespace={'movies'}
            category={'nowPlaying'}
            action={fetchNowPlayingMovies}
          />
        )}
      />
      <Route
        path="/movie/popular/:page"
        render={props => (
          <CategoryPage
            {...props}
            namespace={'movies'}
            category={'popular'}
            action={fetchPopularMovies}
          />
        )}
      />
      <Route
        path="/show/on-air/:page"
        render={props => (
          <CategoryPage
            {...props}
            namespace={'shows'}
            category={'onTheAir'}
            action={fetchOnTheAirShows}
          />
        )}
      />
      <Route path="/movie/:id" component={MoviePage} />
      <Route path="/show/:id" component={ShowPage} />
      <Route path="/movies/:page" component={DiscoverMoviesPage} />
      <Route path="/shows/:page" component={DiscoverShowsPage} />
    </Switch>
  </main>
);

export default Main;
