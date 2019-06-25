//React and React Router import statements
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  //purpose: render navigation menu
  render() {
    return (
      <nav className="main-nav">
        <ul>
          {/*each NavLink should link to the given category topic and also
            display each topic as the link text*/}
          <li><NavLink to={`/${this.props.topic1}`}>{this.props.topic1}</NavLink></li>
          <li><NavLink to={`/${this.props.topic2}`}>{this.props.topic2}</NavLink></li>
          <li><NavLink to={`/${this.props.topic3}`}>{this.props.topic3}</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
