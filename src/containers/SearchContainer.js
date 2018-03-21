import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Suggestions from '../components/Suggestions';
import { connect } from 'react-redux';
import { fetchSearch } from '../actions/search';
import _ from 'lodash';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuggetions: false
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.searchQuery = this.searchQuery.bind(this);
  }

  handleBlur() {
    this.setState({ showSuggestions: false });
  }

  searchQuery(query) {
    if (query && query.length > 1) {
      this.props.fetchSearch(query);
      this.setState({ showSuggestions: true });
    }
  }

  render() {
    const searchQuery = _.debounce(query => {
      this.searchQuery(query);
    }, 1000);

    return (
      <div onBlur={this.handleBlur}>
        <SearchBar onSearchQueryChange={searchQuery} />
        {this.state.showSuggestions ? (
          <Suggestions results={this.props.results} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    results: state.search.results
  };
};

export default connect(mapStateToProps, { fetchSearch })(SearchContainer);
