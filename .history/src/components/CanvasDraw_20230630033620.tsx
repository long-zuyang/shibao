import { useRef, useEffect } from 'react';
import BaseImg from '../assets/base.jpg';

function CanvasDrow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  console.log(canvasRef.current);

  /**
   * 初始化 Canvas
   */
  function _initCanvas(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D | null
  ) {
    // 设置背景颜色为红色
    context?.fillStyle = '#f5f5f5';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  /**
   * 渲染圆角头像
   * @param canvas Canvas DOM对象
   * @param context Canvas Context上下文
   * @param imgUrl 头像地址
   */
  function drawRadiusProfilePicture(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D | null,
    imgUrl: string
  ) {
    // 创建头像图片
    const picture = new Image();
    picture.src = imgUrl;
    console.dir(picture);

    // 图片加载完成后绘制圆角图片
    picture.onload = () => {
      // 缩放Canvas提升分辨率
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      context?.scale(dpr, dpr);

      const x = 10;
      const y = 10;
      const width = 50;
      const height = 50;
      const radius = 5;
      context?.save();
      context?.beginPath();
      context?.moveTo(x + radius, y);
      context?.lineTo(x + width - radius, y);
      context?.quadraticCurveTo(x + width, y, x + width, y + radius);
      context?.lineTo(x + width, y + height - radius);
      context?.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius,
        y + height
      );
      context?.lineTo(x + radius, y + height);
      context?.quadraticCurveTo(x, y + height, x, y + height - radius);
      context?.lineTo(x, y + radius);
      context?.quadraticCurveTo(x, y, x + radius, y);
      context?.closePath();

      // context?.stroke(); // 绘制线段

      context?.clip();
      context?.drawImage(
        picture,
        0,
        0,
        picture.width,
        picture.height,
        10,
        10,
        50,
        50
      );

      context?.restore();
    };
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas == null) {
      return;
    }
    const ctx = canvas.getContext('2d');

    // 初始化
    _initCanvas(canvas, ctx);

    drawRadiusProfilePicture(canvas, ctx, BaseImg);
  }, []);

  return <canvas ref={canvasRef} />;
}

export default CanvasDrow;
