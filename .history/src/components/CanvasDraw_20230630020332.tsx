import { useRef, useEffect } from 'react';
import BaseImg from '../assets/base.jpg';

function CanvasDrow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function _initCanvas() {}

  /**
   * 渲染圆角头像
   */
  function drawRadiusProfilePicture(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    imgUrl: string
  ) {
    if (context == null) return;

    // 创建头像图片
    const picture = new Image();
    picture.src = imgUrl;
    console.dir(picture);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas == null) {
      return;
    }

    const ctx = canvas.getContext('2d');

    drawRadiusProfilePicture(canvas, ctx, BaseImg);

    // 图片加载完成后绘制圆角图片
    img.onload = () => {
      // 缩放Canvas提升分辨率
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx?.scale(dpr, dpr);

      const x = 10;
      const y = 10;
      const width = 50;
      const height = 50;
      const radius = 5;
      ctx?.save();
      ctx?.beginPath();
      ctx?.moveTo(x + radius, y);
      ctx?.lineTo(x + width - radius, y);
      ctx?.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx?.lineTo(x + width, y + height - radius);
      ctx?.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius,
        y + height
      );
      ctx?.lineTo(x + radius, y + height);
      ctx?.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx?.lineTo(x, y + radius);
      ctx?.quadraticCurveTo(x, y, x + radius, y);
      ctx?.closePath();
      // ctx?.stroke(); // 绘制线段
      ctx?.clip();
      ctx?.drawImage(img, 0, 0, img.width, img.height, 10, 10, 50, 50);

      ctx?.restore();
    };
  }, []);
  // if (!canvasRef.current) {
  //   return <div>Canvas is not available.</div>;
  // }
  return <canvas ref={canvasRef} />;
}

export default CanvasDrow;
