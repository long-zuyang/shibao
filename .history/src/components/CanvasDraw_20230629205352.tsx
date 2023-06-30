import { useRef, useEffect } from 'react';

function CanvasDrow() {
  useEffect(() => {
    console.log(document.getElementById('cvs'));
  });

  return <canvas id="cvs"></canvas>;
}

export default CanvasDrow;
