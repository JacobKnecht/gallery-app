import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

class Header extends Component {
  //Purpose: to store app title, logo, nav and search bar
  //Should be stateless component
  //Should receive props from App component
  render() {
    return (
      <header>
        {this.props.message}
        <SearchForm />
        <Nav />
      </header>
    );
  }
}

export default Header;
