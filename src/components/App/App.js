import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header/';
import Main from '../Main/';
import Footer from '../Footer';
import styles from './App.scss';

const App = () => (
  <BrowserRouter>
    <div className={styles.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
