import React, { Component } from 'react';
import Home from "./containers/Home";
import {Route, withRouter} from "react-router-dom";
import './App.css';
import Collocations from './containers/Collocations';
import CollocationView from './containers/CollocationView';
import Housemate from './containers/Housemates';
import NewHousemateView from './containers/NewHousemateView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Route exact path="/" component={Home} />
          <Route exact path="/collocations" component={Collocations} />
          <Route exact path="/collocationView" component={CollocationView} />
          <Route exact path="/housemates" component={Housemate} />
          <Route exact path="/newHousemateView" component={NewHousemateView} />
          
        </header>
      </div>
    );
  }
}

export default withRouter(App);
