import React, { Component } from 'react';
import SearchForm from './SearchForm'

class Header extends Component {
  //Purpose: to store app title, logo, nav and search bar
  //Should be stateless component
  //Should receive props from App component
  render() {
    return (
      <header>
        {this.props.message}
        <SearchForm />
      </header>
    );
  }
}

export default Header;
