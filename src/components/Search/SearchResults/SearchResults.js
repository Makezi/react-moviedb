import React from 'react';
import { Link } from 'react-router-dom';
import Poster from '../../Poster/';
import moment from 'moment';
import styles from './SearchResults.scss';

const SearchResults = ({ results }) => {
  results = results.slice(0, 10);
  return (
    <ul className={styles.searchResults}>
      {results && results.length !== 0 ? (
        results.map(result => (
          <li className={styles.result} key={result.id}>
            <Link className={styles.link} to={`/movie/${result.id}`}>
              <Poster img={result.poster_path} />
              <span className={styles.title}>
                {result.title}
                <span className={styles.year}>{` (${
                  result.release_date
                    ? moment(result.release_date).format('YYYY')
                    : 'N/A'
                })`}</span>
              </span>
            </Link>
          </li>
        ))
      ) : (
        <li className={styles.result}>
          <div className={styles.link}>No results found</div>
        </li>
      )}
    </ul>
  );
};

export default SearchResults;
