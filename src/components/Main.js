import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DiscoverPage from '../containers/pages/DiscoverPage';
import CategoryPage from '../containers/pages/CategoryPage';
import ContentPage from '../containers/pages/ContentPage';
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchOnTheAirShows
} from '../actions/categories';
import { fetchDiscoverMovies, fetchDiscoverShows } from '../actions/discovers';
import { fetchMovie } from '../actions/movies';
import { fetchShow } from '../actions/shows';

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
      <Route
        path="/movie/:id"
        render={props => (
          <ContentPage {...props} namespace={'movies'} action={fetchMovie} />
        )}
      />
      <Route
        path="/show/:id"
        render={props => (
          <ContentPage {...props} namespace={'shows'} action={fetchShow} />
        )}
      />
      <Route
        path="/movies/:page"
        render={props => (
          <DiscoverPage
            {...props}
            namespace={'movies'}
            action={fetchDiscoverMovies}
          />
        )}
      />
      <Route
        path="/shows/:page"
        render={props => (
          <DiscoverPage
            {...props}
            namespace={'shows'}
            action={fetchDiscoverShows}
          />
        )}
      />
    </Switch>
  </main>
);

export default Main;
