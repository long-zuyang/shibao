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
    console.dir(headImg);

    // 图片加载完成后绘制图片
    headImg.onload = () => {
      // const height = 100;
      // const width = 300;
      const maxWidth = 200;
      const maxHeight = 100;
      const scale = Math.min(
        maxWidth / headImg.width,
        maxHeight / headImg.height
      );
      const width = headImg.width * scale;
      const height = headImg.height * scale;

      ctx?.drawImage(headImg, 0, 0, width, height);
    };
  }, []);
  // if (!canvasRef.current) {
  //   return <div>Canvas is not available.</div>;
  // }
  return <canvas ref={canvasRef} />;
}

export default CanvasDrow;
