// import { useState } from 'react';
import { Flex, Image } from 'react-vant';
import './App.less';
import BaseIMG from './assets/base.jpg';

function App() {
  // const [count, setCount] = useState(0);
  const Title = '屎包の表情生成器'

  return (
    <div className="main">
      <div className="top">
        <div className="name"></div>
      </div>
      {/* <Flex justify="center" align="center">
        <Flex.Item span={12}>
          <Image src={BaseIMG} />
        </Flex.Item>
      </Flex> */}
    </div>
  );
}

export default App;
