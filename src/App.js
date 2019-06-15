import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header message={"REACT IMAGE GALLERY APP"} />
      </div>
    </BrowserRouter>
  );
}

export default App;
