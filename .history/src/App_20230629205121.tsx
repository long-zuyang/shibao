// import { useState } from 'react';
import { Flex, Image } from 'react-vant';
import React, { useRef, useEffect } from 'react';
import './App.less';

// function App() {
//   // const [count, setCount] = useState(0);
//   // console.log(document.getElementById('cvs'));

// }

class App extends REacComponent {
  state = {};

  componentDidMount() {
    console.log(document.getElementById('cvs'));
  }

  render() {
    console.log('渲染');

    return (
      <div className="main">
        <div className="top">
          <div className="name">屎包の表情生成器</div>
        </div>
        <div className="container">
          <span className="tips">预览</span>
          <canvas id="cvs"></canvas>
        </div>
      </div>
    );
  }
}

export default App;
