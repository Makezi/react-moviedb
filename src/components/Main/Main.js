import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DiscoverPage from '../../pages/DiscoverPage';
import MoviePage from '../../pages/MoviePage';
import NotFoundPage from '../../pages/NotFoundPage';
import styles from './Main.scss';

const Main = () => (
  <main className={styles.main}>
    <Switch>
      <Route path="/react-moviedb" exact component={DiscoverPage} />
      <Route path="/react-moviedb/discover/:page" component={DiscoverPage} />
      <Route path="/react-moviedb/movie/:id" component={MoviePage} />
      <Route path="/react-moviedb/404" component={NotFoundPage} />
      <Redirect from="*" to="/react-moviedb/404" />
    </Switch>
  </main>
);

export default Main;
