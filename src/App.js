import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/Gallery';
import apiKey from './config.js';


class App extends Component {
  state = {
    images : [],
  }

  componentDidMount() {
    //data needs to be fetched here
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=walrus&extras=url_o&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => this.setState({ images: responseData.photos.photo }))
      .catch(error => console.log('There was an error fetching the data...'));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header title={"JAKE'S REACT IMAGE GALLERY APP"} />
          <Gallery images={this.state.images} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
