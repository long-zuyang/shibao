import { useRef, useEffect } from 'react';

function CanvasDrow() {
  const canvasRef = useRef<>();

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx = canvas.getContext('2d');
  }, []);

  return <canvas ref={canvasRef} />;
}

export default CanvasDrow;
