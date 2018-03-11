import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';
import CategoryPage from '../containers/pages/CategoryPage';
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchOnTheAirShows
} from '../actions/categories';
import ShowPage from '../pages/ShowPage';

const App = () => (
  <BrowserRouter>
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
    </Switch>
  </BrowserRouter>
);

export default App;
