import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';

const Main = () => (
  <main>
    <Switch>
      <Route path="/movie/:id" component={MainPage} />
      <Route path="/404" component={NotFoundPage} />
      <Redirect from="*" to="/404" />
    </Switch>
  </main>
);

export default Main;
