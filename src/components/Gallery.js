//React and React Router import statements
import React, { Component } from 'react';
import GalleryItem from './GalleryItem';

//component import statements
import NoItems from './NoItems';

class Gallery extends Component {
  //purpose: reusable display for the sets of images for each topic category
  render() {
      //if the images array passed to Gallery component is not empty,
      //render the images
      if(this.props.images.length > 0) {
        return (
            <div className="photo-container">
              <h2>{this.props.title} Images</h2>
              <ul>
                {/*create a GalleryItem component for every image*/}
                {
                  this.props.images.map(image => {
                    return (
                      //GalleryItem component receives the image id as a key
                      //as well as the image source URL and image title
                      //as props
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
        //if the images array passed to Gallery component is empty,
        //render NoItems component
        return (
          //NoItems component receives the search term as props
          <NoItems title={this.props.title} />
        );
      }
  }
}

export default Gallery;
