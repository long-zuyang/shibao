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
    const headImg = new Image();
    headImg.src = BaseImg;
    headImg.width = 50;
    headImg.height = 50;

    // 图片加载完成后绘制图片
    headImg.onload = () => {
      ctx?.drawImage(headImg, 20, 20);
    };
  }, []);
  if (!canvasRef.current) {
    return <div>Canvas is not available.</div>;
  }
  return <canvas ref={canvasRef} />;
}

export default CanvasDrow;
