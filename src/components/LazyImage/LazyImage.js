import React from 'react';
import placeholder from '../../images/placeholder-poster.png';
import './LazyImage.css';

const LazyImage = ({ src, children }) => {
  const imageStyle = {
    backgroundImage: `url(${src}), url(${placeholder})`
  };
  return (
    <div className="image" style={imageStyle}>
      {children}
    </div>
  );
};

export default LazyImage;
