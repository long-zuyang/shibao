import { useRef, useEffect } from 'react';

function CanvasDrow() {
  useEffect(() => {
    console.log(document.getElementById('cvs'));

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
  });

  return <canvas id="cvs"></canvas>;
}

export default CanvasDrow;