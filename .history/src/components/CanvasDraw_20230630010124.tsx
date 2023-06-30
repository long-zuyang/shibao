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
    img.style.borderRadius = '10px';
    console.dir(img);

    // 图片加载完成后绘制圆角图片
    img.onload = () => {
      const size = Math.min(img.width, img.height);
      const radius = size / 2;

      ctx?.save();
      ctx?.beginPath();
      ctx.arc( + radius, y + radius, radius, 0, 2 * Math.PI, false);

      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx?.scale(dpr, dpr);
      // const size = Math.min(img.width, img.height);
      // const x = (img.width - size) / 2;
      // const y = (img.height - size) / 2;
      // ctx?.drawImage(img, x, y, size, size, 0, 0, canvas.width, canvas.height);

      ctx?.drawImage(img, 0, 0, img.width, img.height, 10, 10, 50, 50);
    };
  }, []);
  // if (!canvasRef.current) {
  //   return <div>Canvas is not available.</div>;
  // }
  return <canvas ref={canvasRef} />;
}

export default CanvasDrow;
