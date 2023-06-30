// import { useState } from 'react';
// import { Flex, Image } from 'react-vant';
import React from 'react';
import './App.less';

import CanvasDrow from './components/NewCanvasDraw';

// function App() {
//   // const [count, setCount] = useState(0);
//   // console.log(document.getElementById('cvs'));

// }

class App extends React.Component {
  state = {};

  componentDidMount() {
    // console.log(document.getElementById('cvs'));
  }

  render() {
    console.log('Rendering...');

    return (
      <div className="main">
        <div className="top">
          <div className="name">屎包の表情生成器</div>
        </div>
        <div className="container">
          <span className="tips">预览</span>
          <CanvasDrow  />
        </div>
      </div>
    );
  }
}

export default App;
