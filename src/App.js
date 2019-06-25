import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Header from './components/Header';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';

import apiKey from './config.js';


class App extends Component {
  state = {
    images : [],
    searchTopic : "",
    topic1 : "Walrus",
    topic2 : "Tree",
    topic3 : "Mountain",
    topic1Images : [],
    topic2Images : [],
    topic3Images : [],
    isLoading : true,
  }

  componentDidMount() {
    //data for default topic categories needs to be fetched here
    //topic 1 image data
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.topic1}&extras=url_o&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => this.setState({ topic1Images: responseData.photos.photo }))
      .catch(error => console.log('There was an error fetching the data...'));
    //topic 2 image data
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.topic2}&extras=url_o&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => this.setState({ topic2Images: responseData.photos.photo }))
      .catch(error => console.log('There was an error fetching the data...'));
    //topic 3 image data
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.topic3}&extras=url_o&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => this.setState({ topic3Images: responseData.photos.photo }))
      .then(responseData => this.setState({ isLoading: false }))
      .catch(error => console.log('There was an error fetching the data...'));
  }

  performSearch = search => {
    this.setState({ isLoading: true });
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&extras=url_o&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => this.setState({
        images: responseData.photos.photo,
        searchTopic: search,
        isLoading: false
      }))
      .catch(error => console.log('There was an error fetching the data...'));
  }

  render() {
    return this.state.isLoading ? ( <h2>Loading...</h2> ) : (
      <BrowserRouter>
        <div className="container">
          <Header
            title={"JAKE'S REACT IMAGE GALLERY APP"}
            onSearch={this.performSearch}
            topic1={this.state.topic1}
            topic2={this.state.topic2}
            topic3={this.state.topic3}
          />
          <Switch>
            <Route exact path="/" render={ () => <Redirect to={`/${this.state.topic1}`} /> } />
            <Route
              path={`/${this.state.topic1}`}
              render={ () =>
                <Gallery title={this.state.topic1} images={this.state.topic1Images} />
              }
            />
            <Route
              path={`/${this.state.topic2}`}
              render={ () =>
                <Gallery title={this.state.topic2} images={this.state.topic2Images} />
              }
            />
            <Route
              path={`/${this.state.topic3}`}
              render={ () =>
                <Gallery title={this.state.topic3} images={this.state.topic3Images} />
              }
            />
            <Route
              exact path={`/${this.state.searchTopic}`}
              render={ () =>
                <Gallery title={this.state.searchTopic} images={this.state.images} />
              }
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
