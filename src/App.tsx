import React from 'react';
import './App.less';

import { version } from '../package.json';

import CanvasDrow from './components/CanvasDraw';

console.log(
  '%c欢迎使用屎包の表情生成器!',
  'color:white;background-color:black;padding:12px;border-radius:8px;font-size: 16px;font-family: 微软雅黑;'
);

console.log(
  '%c项目开源地址：https://github.com/long-zuyang/shibao',
  'color:black;border:1px solid;padding:12px;border-radius:8px;font-size: 16px;font-family: 微软雅黑;'
);

class App extends React.Component {
  render() {
    console.log('Rendering...');

    return (
      <div className="main">
        <div className="top">
          <div className="name">屎包の表情生成器</div>
        </div>
        <div className="container">
          <span className="tips">预览</span>
          <CanvasDrow />
        </div>
        <div className="bottom">
          <p>版本：{version}</p>
        </div>
      </div>
    );
  }
}

export default App;
