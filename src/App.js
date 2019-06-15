import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header'

function App() {
  return (
    <div className="container">
      <Header message={"REACT IMAGE GALLERY APP"} />
    </div>
  );
}

export default App;
