import React from 'react';
import './App.less';

import { version } from '../package.json';

import CanvasDrow from './components/NewCanvasDraw';

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
