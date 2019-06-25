import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import NoItems from './NoItems';

class Gallery extends Component {
  //Purpose: reusable display for the sets of images for each topic category
  //Should be stateless component
  //Should receive props from App component
  render() {
      if(this.props.images.length > 0) {
        return (
            <div className="photo-container">
              <h2>{this.props.title}</h2>
              <ul>
                {
                  this.props.images.map(image => {
                    return (
                      <GalleryItem
                        key={image.id}
                        source={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
                        alt={image.title}
                      />
                    )
                  })
                }
              </ul>
            </div>
        );
      } else {
        return (
          <NoItems title={this.props.title} />
        );
      }
  }
}

export default Gallery;
