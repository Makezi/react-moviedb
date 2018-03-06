import React from 'react';

const PopularMoviesList = ({ isLoading, movies }) => {
  if (isLoading || !movies) {
    return <p>Loading...</p>
  }
  return (
    <div>Hello, popular movie list here!</div>
  )
};

export default PopularMoviesList;
