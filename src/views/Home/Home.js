import React from 'react';
import { Carousel } from 'antd-mobile';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
    }
  }
  render() {
    return (
      <div>
        <Carousel autoplay={false} infinite>
          {this.state.data.map(val => (
            <a key={val} href="http://www.alipay.com" style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
              <img
                src={`https://tpc.googlesyndication.com/simgad/8593981413023260756?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qmeC9TSiuEECfc0i2oHF7I4oNgplw`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Home;
