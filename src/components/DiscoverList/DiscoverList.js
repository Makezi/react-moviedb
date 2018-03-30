import React, { Component } from 'react';
import MovieCard from '../MovieCard/';
import styles from './DiscoverList.scss';

const DiscoverList = ({ discoverList, movieList, pageId }) => {
  const { isLoading, hasErrored, pages } = discoverList;
  if (hasErrored) return <div>There was an error</div>;
  if (isLoading || !pages[pageId]) return <div>Loading...</div>;
  const movieIds = discoverList.pages[pageId].ids;
  const list = movieIds.map(id => movieList[id]);
  return (
    <ul className={styles.discoverList}>
      {list.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </ul>
  );
};

export default DiscoverList;
