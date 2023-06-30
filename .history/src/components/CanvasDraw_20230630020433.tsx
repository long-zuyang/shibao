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
