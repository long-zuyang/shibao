import { useRef, useEffect } from 'react';
import BaseImg from '../assets/base.jpg';

function CanvasDrow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // 图片加载完成后绘制图片
    img.onload = () => {
      // const size = Math.min(img.width, img.height);
      // const x = (img.width - size) / 2;
      // const y = (img.height - size) / 2;
      // ctx?.drawImage(img, x, y, size, size, 0, 0, canvas.width, canvas.height);

      ctx?.drawImage(img, 0, 0, img.width, img.height, 0, 0, 100, 100);
    };
  }, []);
  // if (!canvasRef.current) {
  //   return <div>Canvas is not available.</div>;
  // }
  return <canvas ref={canvasRef} />;
}

export default CanvasDrow;
