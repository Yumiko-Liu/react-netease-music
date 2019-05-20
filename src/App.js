import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './views/Home/Home';
import Personal from './views/Personal/Personal';
import NavBar from './components/NavBar/NavBar';
import './assets/css/App.less';

class App extends React.Component {
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

export default App;
