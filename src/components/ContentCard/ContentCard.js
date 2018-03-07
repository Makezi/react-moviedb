import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_API_IMG_URL } from '../../constants/api';
import './ContentCard.css';

const ContentCard = ({ movie, show }) => {
  const content = movie ? movie : show;
  return (
    <div className="card">
      <Link to={movie ? `/movie/${movie.id}` : `/show/${show.id}`}>
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
