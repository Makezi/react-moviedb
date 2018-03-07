import React from 'react';

const MovieDetail = ({ isLoading, movie }) => {
  if (isLoading || !movie) return <div>Loading...</div>

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  )
};

export default MovieDetail;
