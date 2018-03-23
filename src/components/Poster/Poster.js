import React from 'react';
import { BASE_API_IMG_URL } from '../../constants/api';
import "./Poster.css";

const Poster = ({ title, img }) => (
  <div className="poster">
    <img src={`${BASE_API_IMG_URL}${img}`} alt={`${title} poster`} />
  </div>
);

export default Poster;
