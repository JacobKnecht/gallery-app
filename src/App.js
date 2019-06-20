import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/Gallery';
import apiKey from './config.js';


//data needs to be fetched here

class App extends Component {
  state = {
    images : [
      <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />,
      <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />,
      <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />,
      <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
    ],
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
