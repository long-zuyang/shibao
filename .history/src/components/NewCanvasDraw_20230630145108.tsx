import React from 'react';

class CanvasDraw extends React.Component {
  state = {
    nickNameWidth: 0,
    nickNameHeight: 0
  };

  componentDidMount(): void {
    return;
  }

  componentDidUpdate(): void {
    console.log('Update');
  }

  nitCanvas(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D | null
  ) {
    if (!context) {
      return;
    }

    // 获取Canvas的宽高
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;

    // 缩放Canvas提升分辨率
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;
    context.scale(dpr, dpr);

    // 设置背景颜色为灰色
    context.fillStyle = '#f5f5f5';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.save();

    console.log('Cavas init.');
  }

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
