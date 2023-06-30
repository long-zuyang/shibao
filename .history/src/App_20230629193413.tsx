import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return <div id="main">
    <canvas></canvas>
  </div>;
}

export default App;
