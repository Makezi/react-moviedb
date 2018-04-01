import React from 'react';
import { BASE_API_IMG_URL } from '../../constants/api';
import placeholder from '../../images/placeholder-poster.png';
import styles from './Poster.scss';

const Poster = ({ img, title }) => {
  const placeholderStyle = {
    backgroundImage: `url(${placeholder})`
  };
  return (
    <div
      className={styles.placeholder}
      style={placeholderStyle}
      title={`poster of ${title}`}
    >
      <img
        className={styles.poster}
        src={`${BASE_API_IMG_URL}${img}`}
        alt={`poster of ${title}`}
      />
    </div>
  );
};

export default Poster;
