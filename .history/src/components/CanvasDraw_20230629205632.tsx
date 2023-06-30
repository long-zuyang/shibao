import { useRef, useEffect } from 'react';

function CanvasDrow() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx = canvas.getContext('2d');
  });

  return <canvas ref={canvasRef}></canvas>;
}

export default CanvasDrow;