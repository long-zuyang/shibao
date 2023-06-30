import { useRef, useEffect } from 'react';
import BaseImg from '../assets/base.jpg';

function CanvasDraw() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /**
   * 初始化 Canvas
   */
  function initCanvas(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D | null
  ) {
    if (!context) {
      return;
    }

    console.log('aaa');

    // 设置背景颜色为灰色
    context.fillStyle = 'red';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  /**
   * 渲染圆角头像
   * @param canvas Canvas DOM对象
   * @param context Canvas Context上下文
   * @param imgUrl 头像地址
   */


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    // 初始化 Canvas
    initCanvas(canvas, ctx);

    // 渲染圆角头像
    // drawRadiusProfilePicture(canvas, ctx, BaseImg);
  }, []);

  return <canvas ref={canvasRef} />;
}

export default CanvasDraw;
