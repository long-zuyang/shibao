import { useRef, useEffect } from 'react';


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
    headImg.src = 
  }, []);

  return <canvas ref={canvasRef} />;
}

export default CanvasDrow;
