import React from 'react';
import { BASE_API_IMG_URL } from '../../constants/api';
import LazyImage from "../LazyImage/";
import "./Poster.css";

const Poster = ({ title, img, children }) => (
  <div className="poster">
    <LazyImage src={`${BASE_API_IMG_URL}${img}`} alt={`${title} poster`}>
      {children}
    </LazyImage>
  </div>
);

export default Poster;
