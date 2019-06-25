//React and React Router import statements
import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

//component import statements
import Header from './components/Header';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';

//API key import statement
import apiKey from './config.js';


class App extends Component {
  //purpose: maintain application state and render application components and routes

  //App component state declarations
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
      //topic category data is no longer being fetched
      .then(responseData => this.setState({ isLoading: false }))
      .catch(error => console.log('There was an error fetching the data...'));
  }

  performSearch = search => {
    //set application loading state to 'true'
    this.setState({ isLoading: true });
    //fetch the data for the user's search term from the Flickr API
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&extras=url_o&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => this.setState({
        images: responseData.photos.photo,
        searchTopic: search,
        //search term data is no longer being fetched
        isLoading: false
      }))
      .catch(error => console.log('There was an error fetching the data...'));
  }

  render() {
    //*if application is loading data, render loading screen, otherwise,
    //load data
    return this.state.isLoading ? ( <h2>Loading...</h2> ) : (
      <BrowserRouter>
        <div className="container">
          {/*Header props include three category topics and a callback
            for the search field*/}
          <Header
            onSearch={this.performSearch}
            topic1={this.state.topic1}
            topic2={this.state.topic2}
            topic3={this.state.topic3}
          />
          <Switch>
            {/*each route receives props for a title and corresponding
              image data*/}
            {/*default homepage route - redirects to topic category 1 route*/}
            <Route exact path="/" render={ () => <Redirect to={`/${this.state.topic1}`} /> } />
            {/*category topic 1 route*/}
            <Route
              path={`/${this.state.topic1}`}
              render={ () =>
                <Gallery title={this.state.topic1} images={this.state.topic1Images} />
              }
            />
            {/*category topic 2 route*/}
            <Route
              path={`/${this.state.topic2}`}
              render={ () =>
                <Gallery title={this.state.topic2} images={this.state.topic2Images} />
              }
            />
            {/*category topic 3 route*/}
            <Route
              path={`/${this.state.topic3}`}
              render={ () =>
                <Gallery title={this.state.topic3} images={this.state.topic3Images} />
              }
            />
            {/*search topic route*/}
            <Route
              exact path={`/${this.state.searchTopic}`}
              render={ () =>
                <Gallery title={this.state.searchTopic} images={this.state.images} />
              }
            />
            {/*404 error/not found route*/}
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
