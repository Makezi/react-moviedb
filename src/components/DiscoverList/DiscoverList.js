import React from 'react';
import MovieCard from '../MovieCard/';
import Spinner from '../Spinner/';
import NotFound from '../NotFound/';
import PropTypes from 'prop-types';
import styles from './DiscoverList.scss';

const DiscoverList = ({ discoverList, movieList, pageId }) => {
  const { isLoading, hasErrored, pages } = discoverList;
  if (hasErrored) {
    return (
      <div className={styles.discoverList}>
        <NotFound />
      </div>
    );
  }
  if (isLoading || !pages[pageId]) {
    return (
      <div className={styles.discoverList}>
        <Spinner />
      </div>
    );
  }
  const movieIds = discoverList.pages[pageId].ids;
  const list = movieIds.map(id => movieList[id]);

  return (
    <ul className={styles.discoverList}>
      {list.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </ul>
  );
};

export default DiscoverList;

DiscoverList.propTypes = {
  discoverList: PropTypes.object.isRequired,
  movieList: PropTypes.object.isRequired,
  pageId: PropTypes.string
};
