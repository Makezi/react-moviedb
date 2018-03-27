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
    {prevPageId > 0 ? (
      <Link to={`${basePath}${prevPageId}`}>Previous</Link>
    ) : null}
    {nextPageId <= totalPages ? (
      <Link to={`${basePath}${nextPageId}`}>Next</Link>
    ) : null}

    <p>{`${+prevPageId + 1} of ${totalPages}`}</p>
    <p>{`${totalResults} total results`}</p>
  </div>
);

export default Paginator;
