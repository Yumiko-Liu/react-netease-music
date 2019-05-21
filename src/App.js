import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './layout/Main';
import Music from './views/Music/Music';

import './assets/css/App.less';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/music" component={Music} />
        </Switch>
      </Router>
    );
  }
}

export default App;
