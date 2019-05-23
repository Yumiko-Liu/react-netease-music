import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.less';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.navbarList = [{
      path: '/main/',
      icon: 'iconfont iconwangyiyunyinle',
      name: '发现'
    }, {
      path: '/main/video',
      icon: 'iconfont iconshipinbofang-',
      name: '视频'
    }, {
      path: '/main/mymusic',
      icon: 'iconfont iconyinyue1',
      name: '我的'
    }, {
      path: '/main/friends',
      icon: 'iconfont iconpengyou',
      name: '朋友'
    }, {
      path: '/main/personal',
      icon: 'iconfont iconuser',
      name: '账号'
    }];
  }
  render() {
    return (
      <div className={"navbar-wrapper"}>
        <ul className={"navbar"}>
          {this.navbarList.map((item) =>
            <NavLink to={item.path} className={"navbar-item"} key={item.name} exact>
              <li>
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
