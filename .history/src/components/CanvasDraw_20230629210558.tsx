import { useRef, useEffect } from 'react';
import BaseImg from '../assets/base.jpg';

function CanvasDrow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 创建头像图片
    const headImg = new Image();
    headImg.src = BaseImg;

    // 图片加载完成后绘制图片
    headImg.onload = () => {
      ctx?.drawImage(headImg, 20, 20);
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default CanvasDrow;
