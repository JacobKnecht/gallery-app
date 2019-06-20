import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

class Nav extends Component {
  //Purpose: render navigation menu
  //Should be stateless component
  //Should receive props from App component
  //Need to add routes for each topic category
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/cats">Cats</NavLink></li>
          <li><NavLink to="/dogs">Dogs</NavLink></li>
          <li><NavLink to="/computers">Computers</NavLink></li>
        </ul>

      </nav>
    );
  }
}

export default Nav;
