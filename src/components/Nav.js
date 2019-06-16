import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  //Purpose: render navigation menu
  //Should be stateless component
  //Should receive props from App component
  //Need to add routes for each topic category
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to="#">Cats</NavLink></li>
          <li><NavLink to="#">Dogs</NavLink></li>
          <li><NavLink to="#">Computers</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
