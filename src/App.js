import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Main from './layout/Main/Main';
import Song from './views/Song/Song';

import './assets/css/App.less';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/main" component={Main} />
          <Route path="/song" component={Song} />
          <Redirect exact from='/' to='/main' />
        </Switch>
      </Router>
    );
  }
}

export default App;
