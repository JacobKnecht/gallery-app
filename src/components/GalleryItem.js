import React, { Component } from 'react';

class GalleryItem extends Component {
  //Purpose: reusable (with iteration) to display each list item and image
  //Should be stateless component
  //Should receive props from App component
  render() {
    return (
      this.props.images.map(image => {
        return (
          <li>
            <img src={image.url_o} alt={image.title} />
          </li>
        );
      })
    );
  }
}

export default GalleryItem;
