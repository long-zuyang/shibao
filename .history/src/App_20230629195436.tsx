// import { useState } from 'react';
import { Flex, Image } from 'react-vant';
import './App.less';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div class="main">
      <Flex justify="center" align="center">
        <Flex.Item span={12}>span: 12</Flex.Item>
      </Flex>
    </div>
  );
}

export default App;
