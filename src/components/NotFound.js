//React import statement
import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    //NotFound component should render a simple message indicating that the
    //page was not found 
    return (
      <div className="not-found">
        <h2>Page Not Found</h2>
      </div>
    );
  }
}

export default NotFound;
