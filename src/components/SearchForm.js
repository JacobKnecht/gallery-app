//React and React Router import statements
import React, { Component } from 'react';
import { withRouter } from 'react-router';

class SearchForm extends Component {
  //purpose: to display the search input and button

  //SearchForm component state declarations
  state = {
    searchText: '',
  }

  //sets the search input text state to the text currently in the input
  onSearchChange = event => {
    this.setState({ searchText: event.target.value });
  }

  //passes search topic to onSearch callback (passes it back to App component)
  //places search term into URL
  //resets search input on submission
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.searchText);
    this.props.history.push(`/${this.searchTag.value}`);
    event.currentTarget.reset();
  }

  render() {
    return (
      //form element receives handleSubmit callback function as onSubmit
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="search"
          name="search"
          onChange={this.onSearchChange}
          placeholder="Search"
          ref={ (input) => this.searchTag = input }
        />
        {/*submit button JSX*/}
        <button type="submit">
          <svg
            fill="#fff"
            height="24"
            viewBox="0 0 23 23"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </form>
    );
  }
}

//must wrap SearchForm component export in 'withRouter' so that it has access
// to Route information and props (this.history)
export default withRouter(SearchForm);
