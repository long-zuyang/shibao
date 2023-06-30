import { useRef, useEffect } from 'react';

function CanvasDrow() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas: HTMLCA = canvasRef.current;
    const ctx = canvas.getContext('2d');
  }, []);

  return <canvas ref={canvasRef} />;
}

export default CanvasDrow;