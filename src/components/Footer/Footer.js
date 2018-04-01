import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <p>
      Made by <a href="https://github.com/makezi">Marko Djordjevic</a>
    </p>
    <p>
      <a href="https://github.com/Makezi/react-moviedb">
        <FontAwesome className={styles.icon} name="github" /> View code
      </a>
    </p>
  </footer>
);

export default Footer;
