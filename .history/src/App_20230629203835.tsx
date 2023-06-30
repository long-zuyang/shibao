// import { useState } from 'react';
import { Flex, Image } from 'react-vant';
import { Component } from 'react';
import './App.less';

// function App() {
//   // const [count, setCount] = useState(0);
//   // console.log(document.getElementById('cvs'));

// }

class App extends Component {
  constructor() {
    super()
    // 组件通过state提供数据
    this.state = {
      msg: 'hello react'
    }
  }


作者: ZuYang
链接: https://long-zuyang.github.io/docs/2022/06/07/React%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/#%E7%B1%BB%E7%BB%84%E4%BB%B6
来源: Long
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
  render() {
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
