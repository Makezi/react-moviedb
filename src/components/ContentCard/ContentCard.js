import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_API_IMG_URL } from '../../constants/api';
import './ContentCard.css';

const ContentCard = ({ content }) => {
  const { type } = content;
  return (
    <div className="card">
      <Link
        to={
          type === 'movie'
            ? `/movies/id/${content.id}`
            : `/shows/id/${content.id}`
        }
      >
        <div
          className="backdrop"
          style={{
            backgroundImage: `url(${BASE_API_IMG_URL}/${content.poster_path}`
          }}
        >
          <div className="container">
            <div className="title">
              {content.title ? content.title : content.name}
            </div>
            <div className="year" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ContentCard;
