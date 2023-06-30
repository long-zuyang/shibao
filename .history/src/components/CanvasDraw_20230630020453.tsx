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
    context: CanvasRenderingContext2D | null,
    imgUrl: string
  ) {
    // 创建头像图片
    const picture = new Image();
    picture.src = imgUrl;
    console.dir(picture);

    // 图片加载完成后绘制圆角图片
    img.onload = () => {
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
      context?.drawImage(img, 0, 0, img.width, img.height, 10, 10, 50, 50);

      context?.restore();
    };
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas == null) {
      return;
    }

    const ctx = canvas.getContext('2d');

    drawRadiusProfilePicture(canvas, ctx, BaseImg);
  }, []);
  // if (!canvasRef.current) {
  //   return <div>Canvas is not available.</div>;
  // }
  return <canvas ref={canvasRef} />;
}

export default CanvasDrow;
