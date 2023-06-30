import { useRef, useEffect } from 'react';
import BaseImg from '../assets/base.jpg';

function CanvasDrow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function _initCanvas() {}

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas == null) {
      return;
    }

    const ctx = canvas.getContext('2d');

    // 创建头像图片
    const img = new Image();
    img.src = BaseImg;
    console.dir(img);

    // 图片加载完成后绘制圆角图片
    img.onload = () => {
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
      ctx?.stroke();
      ctx?.clip();
      // ctx?.drawImage(img, x, y, width, height);

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
