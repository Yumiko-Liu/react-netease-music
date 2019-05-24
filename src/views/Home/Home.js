import React from 'react';
import { Carousel } from 'antd-mobile';

import SongList from '../../components/SongList/SongList';

import './Home.less';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselData: [
        'http://p1.music.126.net/ue0Sttwv4iUQRzXcuvFO1w==/109951164090788681.jpg',
        'http://p1.music.126.net/4EKGak0vW16gxBDsZjbquQ==/109951164090874954.jpg',
        'http://p1.music.126.net/NwfzOrsXCxfMC5gW3FAfkw==/109951164091546133.jpg'
      ]
    };
    this.entranceList = [{
      path: '',
      icon: 'iconfont iconrili',
      name: '每日推荐'
    }, {
      path: '',
      icon: 'iconfont icongedan',
      name: '歌单'
    }, {
      path: '',
      icon: 'iconfont iconzhuzhuangtutubiao',
      name: '排行榜'
    }, {
      path: '',
      icon: 'iconfont icondiantai',
      name: '电台'
    }, {
      path: '',
      icon: 'iconfont iconzhibo',
      name: '直播'
    }]
  }
  render() {
    return (
      <div className={"home-wrapper"}>
        <div className={"carousel-wrapper"}>
          <Carousel autoplay={true} infinite>
            {this.state.carouselData.map(val => (
              <a key={val} href="http://www.alipay.com" className={"carousel-slider-slide-a"}>
                <img src={val} alt="" />
              </a>
            ))}
          </Carousel>
        </div>

        <div className={"entrance-list-wrapper"}>
          <ul className={"entrance-list"}>
            {this.entranceList.map(item => (
              <li>
                <a href="#22">
                  <div className={"entrance-list-icon"}>
                    <i className={item.icon}></i>
                  </div>
                  <p>{item.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={"remd-songlist-wrapper"}>
          <h1>推荐歌单</h1>
          <ul>
            <li>
              <SongList />
            </li>
            <li>
              <SongList />
            </li>
            <li>
              <SongList />
            </li>
            <li>
              <SongList />
            </li>
            <li>
              <SongList />
            </li>
            <li>
              <SongList />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
