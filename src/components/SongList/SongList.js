import React from 'react';
import './SongList.less';

class SongList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className={"songlist-wrapper"}>
        <span className={"badge"}><i className={"iconfont iconplay"}></i>&nbsp;2000</span>
        <img className={"songlist-cover"} src="http://p2.music.126.net/7mcK2bBq3q3tmWIkxt6erQ==/109951164066279070.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="" />
        <p className={"songlist-txt"}>疲倦的生活里，总要有些温柔的对待</p>
      </div>
    );
  }
}

export default SongList;
