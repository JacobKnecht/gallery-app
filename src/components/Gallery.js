import React, { Component } from 'react';
import GalleryItem from './GalleryItem';

class Gallery extends Component {
  //Purpose: reusable display for the sets of images for each topic category
  //Should be stateless component
  //Should receive props from App component
  render() {
    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          <GalleryItem images={this.props.images}/>
        </ul>
      </div>
    );
  }
}

export default Gallery;
