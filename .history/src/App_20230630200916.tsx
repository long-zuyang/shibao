// import { useState } from 'react';
// import { Flex, Image } from 'react-vant';
import React from 'react';
import { Uploader, UploaderValueItem } from 'react-vant';
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

  handleUpdateImg = () => {};

  render() {
    console.log('Rendering...');

    return (
      <div className="main">
        <div className="top">
          <div className="name">屎包の表情生成器</div>
        </div>
        <div className="container">
          <span className="tips">预览</span>
          <CanvasDrow src={this.state.imgPath} />
          <Uploader maxCount={1} onChange={this.handleUpdateImg} />
        </div>
      </div>
    );
  }
}

export default App;
