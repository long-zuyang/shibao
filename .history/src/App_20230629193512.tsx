import { useState } from 'react';
import './App.less';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="main">
      <canvas id="head_img"></canvas>
    </div>
  );
}

export default App;