import React from 'react';

const DiscoverList = ({ discoverList, movieList, pageId }) => {
  const { isLoading, hasErrored, pages } = discoverList;
  if (hasErrored) return <div>There was an error</div>;
  if (isLoading || !pages[pageId]) return <div>Loading...</div>;
  const movieIds = discoverList.pages[pageId].ids;
  const list = movieIds.map(id => movieList[id]);
  return (
    <ul className="discover-list">
      {list.map(movie => <li key={movie.id}>{movie.original_title}</li>)}
    </ul>
  );
};

export default DiscoverList;
