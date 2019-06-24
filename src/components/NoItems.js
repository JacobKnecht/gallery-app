import React, { Component } from 'react';

class NoItems extends Component {
  render() {
    return (
      <div className="no-items">
        <h2>There are no items matching the search term '{this.props.title}'.</h2>
      </div>
    );
  }
}

export default NoItems;
