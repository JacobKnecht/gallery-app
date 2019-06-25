//React and React Router import statements
import React, { Component } from 'react';
import { withRouter } from 'react-router';

//component import statements
import SearchForm from './SearchForm';
import Nav from './Nav';

class Header extends Component {
  //Purpose: to store app title, logo, nav and search bar
  render() {
    return (
      <header>
        {/*SearchForm component receives props for search field callback*/}
        <SearchForm onSearch={this.props.onSearch} />
        {/*Nav component receives props for each category topic*/}
        <Nav
          topic1={this.props.topic1}
          topic2={this.props.topic2}
          topic3={this.props.topic3}
        />
      </header>
    );
  }
}

//must wrap Header component export in 'withRouter' so that it has access to
//Route information and props (this.history)
export default withRouter(Header);
