import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './NotFound.scss';

const NotFound = () => (
  <div className={styles.notfound}>
    <FontAwesome className={styles.icon} name="exclamation-circle" />
    <h2>Oops...</h2>
    <p>There was an error with that request</p>
  </div>
);

export default NotFound;
