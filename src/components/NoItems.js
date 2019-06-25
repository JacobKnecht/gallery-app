//React import statement
import React, { Component } from 'react';

class NoItems extends Component {
  render() {
    //NoItems component should render a simple message indicating that no
    //images matched the user's search term
    return (
      <div className="no-items">
        <h2>There are no items matching the search term '{this.props.title}'.</h2>
      </div>
    );
  }
}

export default NoItems;
