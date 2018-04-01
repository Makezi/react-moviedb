import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import styles from './Paginator.scss';

const Paginator = ({
  basePath,
  prevPageId,
  nextPageId,
  totalPages,
  totalResults
}) => (
  <div className={styles.paginator}>
    <div className={styles.pageInfo}>
      <p className={styles.currentPage}>{`Currently on page ${+prevPageId +
        1} of ${totalPages}`}</p>
      <p className={styles.pageResults}>{`(${totalResults} total results)`}</p>
    </div>

    <div className={styles.buttons}>
      {prevPageId > 0 ? (
        <Link className={styles.prevButton} to={`/react-moviedb${basePath}${prevPageId}`}>
          <FontAwesome className={styles.icon} name="chevron-circle-left" />
        </Link>
      ) : null}
      {nextPageId <= totalPages ? (
        <Link className={styles.nextButton} to={`/react-moviedb${basePath}${nextPageId}`}>
          <FontAwesome className={styles.icon} name="chevron-circle-right" />
        </Link>
      ) : null}
    </div>
  </div>
);

export default Paginator;

Paginator.propTypes = {
  basePath: PropTypes.string.isRequired,
  prevPageId: PropTypes.number.isRequired,
  nextPageId: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired
};
