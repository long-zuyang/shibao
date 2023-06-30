// import { useState } from 'react';
import { Flex, Image } from 'react-vant';
import './App.less';
import BaseIMG from 

function App() {
  // const [count, setCount] = useState(0);
  const src = 'https://img.yzcdn.cn/vant/cat.jpeg';

  return (
    <div className="main">
      <Flex justify="center" align="center">
        <Flex.Item span={12}>
          <Image src={src} />
        </Flex.Item>
      </Flex>
    </div>
  );
}

export default App;
