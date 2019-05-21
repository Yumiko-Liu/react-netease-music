import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import Home from '../views/Home/Home';
import Personal from '../views/Personal/Personal';

class Main extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/personal" component={Personal} />
        </Switch>
        <NavBar />
      </Router>
    );
  }
}

export default Main;
