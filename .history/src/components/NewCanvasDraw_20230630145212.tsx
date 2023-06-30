import React from 'react';

class CanvasDraw extends React.Component {
  state = {
    nickNameWidth: 0,
    nickNameHeight: 0
  };

  componentDidMount(): void {
    return;
  }

  componentDidUpdate(): void {
    console.log('Update');
  }

  /**
   * 初始化 Canvas
   * @param canvas Canvas DOM对象
   * @param context Canvas Context 上下文对象
   */
  initCanvas(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D | null
  ) {
    if (!context) {
      return;
    }

    // 获取Canvas的宽高
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;

    // 缩放Canvas提升分辨率
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;
    context.scale(dpr, dpr);

    // 设置背景颜色为灰色
    context.fillStyle = '#f5f5f5';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.save();

    console.log('Cavas init.');
  }

  /**
   * 渲染圆角头像
   * @param context Canvas Context上下文
   * @param imgPath 头像地址
   */
  drawRadiusProfilePicture(
    context: CanvasRenderingContext2D | null,
    imgPath: string
  ) {
    if (!context) {
      return;
    }
    // 创建头像图片
    const picture = new Image();
    picture.src = imgPath;

    // 图片加载完成后绘制圆角图片
    picture.onload = () => {
      const x = 10;
      const y = 10;
      const width = 50;
      const height = 50;
      const radius = 5;

      // 开始新的绘图路径
      context.beginPath();
      context.moveTo(x + radius, y);
      context.lineTo(x + width - radius, y);
      context.quadraticCurveTo(x + width, y, x + width, y + radius);
      context.lineTo(x + width, y + height - radius);
      context.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius,
        y + height
      );
      context.lineTo(x + radius, y + height);
      context.quadraticCurveTo(x, y + height, x, y + height - radius);
      context.lineTo(x, y + radius);
      context.quadraticCurveTo(x, y, x + radius, y);

      // context.stroke(); // 显示线条

      context.closePath();
      context.clip();
      context.drawImage(
        picture,
        0,
        0,
        picture.width,
        picture.height,
        x,
        y,
        width,
        height
      );

      context.restore();

      console.log('Draw Radius Profile Picture.');
    };
  }

  /**
   * 渲染昵称
   * @param context Canvas Context上下文
   * @param nickName 昵称
   */
  drawNickName(context: CanvasRenderingContext2D, nickName: string): number {
    if (!context) {
      return 0;
    }
    context.font = '13px 微软雅黑';
    // 设置文本基线位置
    context.textBaseline = 'top';
    context.fillStyle = '#a6a5a5';

    // 绘制文本
    context.fillText(nickName, 70, 18);
    context.save();

    console.log('Draw NickName');

    const _textWidth = context.measureText(nickName).width;
    const _textHeight =
      context.measureText(nickName).actualBoundingBoxAscent +
      context.measureText(nickName).actualBoundingBoxDescent;

      this.setState

    setNickNameWidth(_textWidth);
    setNickNameHeight(_textHeight);
    // 返回渲染文本的宽度
    return _textWidth;
  }

  render() {
    const canvasRef = React.createRef<HTMLCanvasElement>();
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    return <canvas ref={canvasRef} />;
  }
}

export default CanvasDraw;
