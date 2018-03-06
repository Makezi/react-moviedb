import React from 'react';
import { BASE_API_IMG_URL } from '../../constants/api';
import './ContentCard.css';

const ContentCard = ({ content }) => (
  <div className="card">
    <div
      className="backdrop"
      style={{
        backgroundImage: `url(${BASE_API_IMG_URL}/${content.poster_path}`
      }}
    >
      <div className="container">
        <div className="title">{content.title}</div>
        <div className="year" />
      </div>
    </div>
  </div>
);

export default ContentCard;
