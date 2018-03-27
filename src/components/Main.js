import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DiscoverPage from "../pages/DiscoverPage";
import MoviePage from '../pages/MoviePage';
import NotFoundPage from '../pages/NotFoundPage';

const Main = () => (
  <main>
    <Switch>
      <Route path="/" exact component={DiscoverPage} />
      <Route path="/discover/:page" component={DiscoverPage} />
      <Route path="/movie/:id" component={MoviePage} />
      <Route path="/404" component={NotFoundPage} />
      <Redirect from="*" to="/404" />
    </Switch>
  </main>
);

export default Main;
