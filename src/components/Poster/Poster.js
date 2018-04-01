import React from 'react';
import PropTypes from 'prop-types';
import { BASE_API_IMG_URL } from '../../constants/api';
import placeholder from '../../images/placeholder-poster.png';
import styles from './Poster.scss';

const Poster = ({ img, title }) => {
  return (
    <img
      className={styles.poster}
      src={img ? `${BASE_API_IMG_URL}${img}` : placeholder}
      alt={`poster of ${title}`}
    />
  );
};

export default Poster;

Poster.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
