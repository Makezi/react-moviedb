import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    );
  }
}

export default SearchBar;
