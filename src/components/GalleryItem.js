import React, { Component } from 'react';

class GalleryItem extends Component {
  //Purpose: reusable (with iteration) to display each list item and image
  //Should be stateless component
  //Should receive props from App component
  render() {
    return (
      <li>
        <img src={this.props.source} alt={this.props.alt} />
      </li>
    );
  }
}

export default GalleryItem;
