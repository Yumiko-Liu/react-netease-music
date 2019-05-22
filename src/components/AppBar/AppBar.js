import React from 'react';
import './AppBar.less';

class AppBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={"appbar-wrapper"}>
        <div className={"icon-btn"}>
          <i className={"iconfont iconmaikefeng"}></i>
        </div>
        <div className={"search-panel full-width"}>
          <i className={"iconfont iconsousuo"}></i>
          <input type="text" placeholder="猜你喜欢" />
        </div>
        <div className={"icon-btn"}>
          <i className={"iconfont iconyinlebofangxuanlvjiezou"}></i>
        </div>
      </div>
    );
  }
}

export default AppBar;
