import React from 'react';
import { Link } from 'react-router-dom';

const Suggestion = ({ result }) => (
  <Link to={`/${result.id}`}>
    <li>{result.original_title}</li>
  </Link>
);

export default Suggestion;
