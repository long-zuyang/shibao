import React from 'react';

class CanvasDraw extends React.Component {
  componentDidMount(): void {
    return;
  }

  componentDidUpdate(): void {}

  render() {
    const canvasRef = React.createRef<HTMLCanvasElement>();
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

export default CanvasDraw;
