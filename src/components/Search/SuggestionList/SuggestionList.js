import React from 'react';
import Suggestion from './Suggestion/';

const SuggestionList = ({ results }) => {
  return (
    <ul className="suggestions">
      {results.map(result => <Suggestion key={result.id} result={result} />)}
    </ul>
  );
};

export default SuggestionList;
