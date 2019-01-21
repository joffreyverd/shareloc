import React, { Component } from 'react';
import Home from './containers/home/Home';
import {Route, withRouter} from 'react-router-dom';
import './css/app.css';

import Collocations from './containers/collocation/Collocations';
import CollocationView from './containers/collocation/CollocationView';
import NewCollocation from './containers/collocation/NewCollocation';
import Housemate from './containers/housemate/Housemates';
import NewHousemateView from './containers/housemate/NewHousemateView';
import Tasks from './containers/task/Tasks';
import NewTaskView from './containers/task/NewTaskView';
import NewAchievedTask from './containers/achievedTask/NewAchievedTask';

const AppRoute = ({component: Component, ...props}) => {
  return (
    <Route {...props} render={props => (
      <div className='App'>
      <Component {...props} />
      </div>
    )} />
  );
}

class App extends Component {
  render() {
    return (
      <>
        <Route exact path='/' component={Home} />

        <AppRoute exact path='/collocations' component={Collocations} />
        <AppRoute exact path='/collocationView' component={CollocationView} />
        <AppRoute exact path='/newCollocation' component={NewCollocation} />
        <AppRoute exact path='/housemates' component={Housemate} />
        <AppRoute exact path='/newHousemateView' component={NewHousemateView} />
        <AppRoute exact path='/tasks' component={Tasks} />
        <AppRoute exact path='/newTaskView' component={NewTaskView} />
        <AppRoute exact path='/newAchievedTask' component={NewAchievedTask} />
      </>
    );
  }
}

export default withRouter(App);
