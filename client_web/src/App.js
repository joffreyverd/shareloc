import React, { Component } from 'react';
import Home from "./containers/Home";
import {Route, withRouter} from "react-router-dom";
import './App.css';
import Collocations from './containers/Collocations';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Route exact path="/" component={Home} />
          <Route exact path="/collocations" component={Collocations} />
          
        </header>
      </div>
    );
  }
}

export default withRouter(App);
