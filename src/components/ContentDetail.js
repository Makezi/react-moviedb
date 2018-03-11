import React from 'react';

const ContentDetail = ({ isLoading, content }) => {
  if (isLoading || !content || !content.genres) return <div>Loading...</div>;

  return (
    <div>
      <h2>{content.title || content.name}</h2>
      {content.genres.map(genre => <span key={genre.id}>{genre.name}</span>)}
      <p>Score: {content.vote_average}</p>
      <p>Runtime: {content.runtime || content.episode_run_time} minutes</p>
      <p>Seasons: {content.number_of_seasons}</p>
      <p>Release Date: {content.release_date || content.first_air_date}</p>
      <p>Box Office: ${content.revenue}</p>
      <p>{content.overview}</p>
    </div>
  );
};

export default ContentDetail;
