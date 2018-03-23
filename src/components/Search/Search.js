import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import SearchBar from './SearchBar/';
import SuggestionList from './SuggestionList';
import { BASE_API_URL, API_KEY } from '../../constants/api';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.searchMovies = this.searchMovies.bind(this);
  }

  searchMovies(query) {
    const url = `${BASE_API_URL}search/movie?api_key=${API_KEY}&query=${query}`;
    axios
      .get(url)
      .then(response => this.setState({ results: response.data.results }));
  }

  render() {
    const searchMovies = _.debounce(query => this.searchMovies(query), 250);
    const results = this.state.results.slice(0, 5);

    return (
      <div className="search">
        <SearchBar onSearch={searchMovies} />
        <SuggestionList results={results} />
      </div>
    );
  }
}

export default Search;
