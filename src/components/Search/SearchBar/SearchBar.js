import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleInputChange() {
    this.setState({ term: this.search.value }, () =>
      this.props.onSearch(this.search.value)
    );
  }

  handleFocus(event) {
    event.target.select();
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movie..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
          onFocus={this.handleFocus}
        />
      </div>
    );
  }
}
export default SearchBar;
