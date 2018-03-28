import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  results = results.slice(0, 5);
  return (
    <ul className="search-results">
      {results && results.length !== 0 ? (
        results.map(result => (
          <li key={result.id}>
            <Link to={`/movie/${result.id}`}>{result.original_title}</Link>
          </li>
        ))
      ) : (
        <li>No results found</li>
      )}
    </ul>
  );
};

export default SearchResults;
