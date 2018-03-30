import React from 'react';
import { Link } from 'react-router-dom';
import Poster from '../../Poster/';
import styles from './SearchResults.scss';

const SearchResults = ({ results }) => {
  results = results.slice(0, 10);
  return (
    <ul className={styles.searchResults}>
      {results && results.length !== 0 ? (
        results.map(result => (
          <li className={styles.result} key={result.id}>
            <Link className={styles.link} to={`/movie/${result.id}`}>
              <Poster className={styles.poster} img={result.poster_path} />
              {result.original_title}
            </Link>
          </li>
        ))
      ) : (
        <li className={styles.result}>No results found</li>
      )}
    </ul>
  );
};

export default SearchResults;
