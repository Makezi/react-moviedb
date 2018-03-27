import React from 'react';
import placeholder from '../../images/placeholder-poster.png';
import './LazyImage.css';

const LazyImage = ({ src }) => {
  const imageStyle = {
    backgroundImage: `url(${src}), url(${placeholder})`
  };
  return <div className="image" style={imageStyle} />;
};

export default LazyImage;
