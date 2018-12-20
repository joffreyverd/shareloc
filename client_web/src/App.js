import React, { Component } from 'react';
import Home from "./containers/Home";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Home path="/" exact component={Home} />
          
        </header>
      </div>
    );
  }
}

export default App;
