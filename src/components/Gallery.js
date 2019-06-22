import React, { Component } from 'react';
import GalleryItem from './GalleryItem';

class Gallery extends Component {
  //Purpose: reusable display for the sets of images for each topic category
  //Should be stateless component
  //Should receive props from App component
  render() {
    return (
      <div className="photo-container">
        <h2>{this.props.title}</h2>
        <ul>
          {
            this.props.images.map(image => {
              return <GalleryItem key={image.id} source={image.url_o} alt={image.title} />
            })
          }
        </ul>
      </div>
    );
  }
}

export default Gallery;
