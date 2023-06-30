import { useRef, useEffect } from 'react';

function CanvasDrow() {
  useEffect(() => {
    console.log(document.getElementById('cvs'));

    const canvasRef = useRef(null);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
  });

  return <canvas id="canvasRef"></canvas>;
}

export default CanvasDrow;
