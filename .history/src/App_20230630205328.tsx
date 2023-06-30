// import { useState } from 'react';
// import { Flex, Image } from 'react-vant';
import React from 'react';
import { Uploader, UploaderValueItem, Button, Flex, Space } from 'react-vant';
import './App.less';

import Ikun1 from './assets/ikun1.png';

import CanvasDrow from './components/NewCanvasDraw';

// function App() {
//   // const [count, setCount] = useState(0);
//   // console.log(document.getElementById('cvs'));

// }

class App extends React.Component {
  state = {
    imgPath: Ikun1
  };

  componentDidMount() {
    // console.log(document.getElementById('cvs'));
  }

  handleUpdateImg = (files: UploaderValueItem) => {
    console.log(files);
    if (files.length == 0) {
      return;
    }

    this.setState({
      imgPath: files[0].url
    });
  };

  render() {
    console.log('Rendering...');

    return (
      <div className="main">
        <div className="top">
          <div className="name">屎包の表情生成器</div>
        </div>
        <div className="container">
          <span className="tips">预览</span>
          <Space direction='vertical'>
          <Uploader maxCount={1} onChange={this.handleUpdateImg} />
          </Space>
          <Flex gutter={16}>
            <Flex.Item span={12}>
              <Uploader maxCount={1} onChange={this.handleUpdateImg} />
            </Flex.Item>
            <Flex.Item span={12}>
              <Button type="primary">下载图片</Button>
            </Flex.Item>
          </Flex>
        </div>
      </div>
    );
  }
}

export default App;
