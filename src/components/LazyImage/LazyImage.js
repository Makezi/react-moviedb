import React from 'react';
import placeholder from '../../images/placeholder-poster.png';
import styles from "./LazyImage.scss";

const LazyImage = ({ src, children }) => {
  const imageStyle = {
    backgroundImage: `url(${src}), url(${placeholder})`
  };
  return (
    <div className={styles.lazyImage} style={imageStyle}>
      {children}
    </div>
  );
};

export default LazyImage;
