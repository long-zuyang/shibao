import React, { useRef } from 'react';

class CanvasDraw extends React.Component {
  render() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    return <canvas ref={canvasRef} />;
  }
}

export default
