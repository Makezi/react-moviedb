import React from 'react';
import { Link } from 'react-router-dom';

const Suggestions = props => {
  console.log('CMON', props.results);
  const options = props.results.map(result => (
    <li key={result.id}>
      <Link
        to={
          result.media_type === 'tv'
            ? `/shows/id/${result.id}`
            : `/movies/id/${result.id}`
        }
      >
        {result.original_name || result.original_title}
      </Link>
    </li>
  ));
  return <ul>{options}</ul>;
};

export default Suggestions;
