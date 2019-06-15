import React, { Component } from 'react';

class SearchForm extends Component {
  //Purpose: to display the search input and button
  //Should contain its own local state
  state = {
    searchText: '';
  }

  //sets the search input text state to the text currently in the input
  onSearchChange = event => {
    this.setState({ searchText: event.target.value });
  }

  //resets search input on submission
  handleSubmit = event => {
    e.preventDefault;
    e.currentTarget.reset();
  }

  render() {
    return (
      <form  className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="search"
          name="search"
          onChange={this.onSearchChange}
          placeholder="Search"
        />
        <button type="submit">
          Jake
        </button>
      </form>
    );
  }
}

export default SearchForm;
