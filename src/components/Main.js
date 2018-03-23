import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';

const Main = () => (
  <main>
    <Switch>
      <Route path="/:id" component={MainPage} />
    </Switch>
  </main>
);

export default Main;
