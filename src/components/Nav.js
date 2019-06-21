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
          <li><NavLink to={`/${this.props.topic1}`}>{this.props.topic1}</NavLink></li>
          <li><NavLink to={`/${this.props.topic2}`}>{this.props.topic2}</NavLink></li>
          <li><NavLink to={`/${this.props.topic3}`}>{this.props.topic3}</NavLink></li>
        </ul>

      </nav>
    );
  }
}

export default Nav;
