import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import SearchBar from './SearchBar/';
import SearchResults from './SearchResults/';
import { BASE_API_URL, API_KEY } from '../../constants/api';
import styles from './Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      showResults: false
    };
    this.hideResults = this.hideResults.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleOnBlur(event) {
    if (
      !event.relatedTarget ||
      !event.relatedTarget.className.toLowerCase().includes('search')
    ) {
      this.hideResults();
    }
  }

  hideResults() {
    setTimeout(() => this.setState({ showResults: false }), 100);
  }

  searchMovies(query) {
    if (!query || query.length < 2) return;
    const url = `${BASE_API_URL}search/movie?api_key=${API_KEY}&query=${query}`;
    axios
      .get(url)
      .then(response =>
        this.setState({ results: response.data.results, showResults: true })
      );
  }

  render() {
    const searchMovies = _.debounce(query => this.searchMovies(query), 250);
    return (
      <div
        className={styles.search}
        onBlur={this.handleOnBlur}
        onClick={this.hideResults}
      >
        <SearchBar onSearch={searchMovies} />
        {this.state.showResults ? (
          <SearchResults results={this.state.results} />
        ) : null}
      </div>
    );
  }
}

export default Search;
