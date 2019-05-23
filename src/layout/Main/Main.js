import React from 'react';
import { Route } from 'react-router-dom';

import './Main.less';

import AppBar from '../..//components/AppBar/AppBar';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../../views/Home/Home';
import Personal from '../../views/Personal/Personal';

class Main extends React.Component {
  render() {
    return (
      <section className={"main-wrapper"}>
        <AppBar />
        <div className={"main-content"}>
          <Route path="/main/" exact component={Home} />
          <Route path="/main/personal" component={Personal} />
        </div>
        <NavBar />
      </section>
    );
  }
}

export default Main;
