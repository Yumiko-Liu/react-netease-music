import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.less';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.navbarList = [{
      path: '/',
      icon: 'iconfont iconwangyiyunyinle',
      name: '发现'
    }, {
      path: '/video',
      icon: 'iconfont iconshipinbofang-',
      name: '视频'
    }, {
      path: '/music',
      icon: 'iconfont iconyinyue1',
      name: '我的'
    }, {
      path: '/friends',
      icon: 'iconfont iconpengyou',
      name: '朋友'
    }, {
      path: '/personal',
      icon: 'iconfont iconuser',
      name: '账号'
    }];
  }
  render() {
    return (
      <div className={"navbar-wrapper"}>
        <ul className={"navbar"}>
          {this.navbarList.map((item) =>
            <NavLink to={item.path} className={"navbar-item"} exact>
              <li key={item.name}>
                <div className={"navbar-item-icon"}>
                  <i className={item.icon}></i>
                </div>
                <div className={"navbar-item-name"}>{item.name}</div>
              </li>
            </NavLink>
          )}
        </ul>
      </div>
    );
  }
}

export default NavBar;
