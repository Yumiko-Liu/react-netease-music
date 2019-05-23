import React from 'react';
import { Carousel } from 'antd-mobile';

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
    }
  }
  render() {
    return (
      <div className={"home-wrapper"}>
        <div className={"carousel-wrapper"}>
          <Carousel autoplay={false} infinite>
            {this.state.carouselData.map(val => (
              <a key={val} href="http://www.alipay.com" style={{ display: 'inline-block', width: '100%', height: '150px' }}>
                <img src={val} alt="" style={{ width: '100%', height: '150px' }}/>
              </a>
            ))}
          </Carousel>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    );
  }
}

export default Home;
