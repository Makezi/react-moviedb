import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ query: event.target.value });
    this.props.onSearchQueryChange(this.state.query);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.state.query}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default SearchBar;
