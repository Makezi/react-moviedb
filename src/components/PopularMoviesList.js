import React from 'react';

const PopularMoviesList = ({ isLoading, hasErrored, movie }) => {
  if (hasErrored) {
    return <p>Sorry! There was an error loading the movie</p>;
  }
  if (isLoading || !movie) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  )
};

export default MovieDetail;
