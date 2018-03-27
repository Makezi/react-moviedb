import React from 'react';
import MovieCard from '../MovieCard/';
import "./DiscoverList.css";

const DiscoverList = ({ discoverList, movieList, pageId }) => {
  const { isLoading, hasErrored, pages } = discoverList;
  if (hasErrored) return <div>There was an error</div>;
  if (isLoading || !pages[pageId]) return <div>Loading...</div>;
  const movieIds = discoverList.pages[pageId].ids;
  const list = movieIds.map(id => movieList[id]);
  return (
    <ul className="discover-list">
      {list.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </ul>
  );
};

export default DiscoverList;
