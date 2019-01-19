import React, { Component } from 'react';
import Home from "./containers/home/Home";
import {Route, withRouter} from "react-router-dom";
import './ressources/css/app.css';

import Collocations from './containers/collocation/Collocations';
import CollocationView from './containers/collocation/CollocationView';
import Housemate from './containers/housemate/Housemates';
import NewHousemateView from './containers/housemate/NewHousemateView';
import Tasks from './containers/task/Tasks';
import NewTaskView from './containers/task/NewTaskView';
import NewAchievedTask from './containers/achievedTask/NewAchievedTask';
import TaskView from './containers/task/TaskView';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/collocations" component={Collocations} />
          <Route exact path="/collocationView" component={CollocationView} />
          <Route exact path="/housemates" component={Housemate} />
          <Route exact path="/newHousemateView" component={NewHousemateView} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/newTaskView" component={NewTaskView} />
          <Route exact path="/newAchievedTask" component={NewAchievedTask} />
          <Route exact path="/taskView" component={TaskView} />
      </div>
    );
  }
}

export default withRouter(App);
