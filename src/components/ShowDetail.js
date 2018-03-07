import React from 'react';

const ShowDetail = ({ isLoading, show }) => {
  if (isLoading || !show) return <div>Loading...</div>

  return (
    <div>
      <h2>{show.name}</h2>
      <p>{show.overview}</p>
    </div>
  )
};

export default ShowDetail;
