//React import statement
import React, { Component } from 'react';

class GalleryItem extends Component {
  //purpose: reusable (with iteration) to display each list item and image
  render() {
    //img element should use source and alt obtained as props from
    //Gallery component
    return (
      <li>
        <img src={this.props.source} alt={this.props.alt} />
      </li>
    );
  }
}

export default GalleryItem;
