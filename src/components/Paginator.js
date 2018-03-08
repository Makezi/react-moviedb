import React from 'react';
import { Link } from 'react-router-dom';

const Paginator = ({
  basePath,
  prevPageId,
  nextPageId,
  totalPages,
  totalResults
}) => (
  <div>
    <button>
      <Link to={prevPageId < 1 ? `${basePath}1` : `${basePath}${prevPageId}`}>
        Previous
      </Link>
    </button>
    <button>
      <Link
        to={
          nextPageId > totalPages
            ? `${basePath}${totalPages}`
            : `${basePath}${nextPageId}`
        }
      >
        Next
      </Link>
    </button>
    <p>{`${+prevPageId + 1} of ${totalPages}`}</p>
    <p>{`${totalResults} total results`}</p>
  </div>
);

export default Paginator;
