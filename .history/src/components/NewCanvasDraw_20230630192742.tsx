import React from 'react';
import BaseImg from '../assets/base.jpg';
import JieGe from '../assets/jiege.png';

interface State {
  nickNameWidth: number;
  nickNameHeight: number;
  canvas: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;
}

class CanvasDraw extends React.Component {
  state: State = {
    nickNameWidth: 0,
    nickNameHeight: 0,
    canvas: null,
    ctx: null
  };

  canvasRef = React.createRef<HTMLCanvasElement>();

  componentDidMount(): void {
    const canvas = this.canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas) {
      return;
    }

    if (!ctx) {
      return;
    }

    this.setState({
      canvas: canvas,
      ctx: ctx
    });

    // 初始化 Canvas
    this.initCanvas(canvas, ctx);

    this.drawRadiusProfilePicture(ctx, BaseImg);

    // 渲染昵称
    this.drawNickName(ctx, '屎包');

    // 渲染表情图
    // this.drawMeme(canvas, ctx, JieGe);

    console.log(this.canvasRef);

    return;
  }

  componentDidUpdate(): void {
    // console.log('Update');
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
      const width = 75;
      const height = 75;
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
  async drawNickName(context: CanvasRenderingContext2D, nickName: string) {
    if (!context) {
      return 0;
    }
    context.font = '13px 微软雅黑';
    // 设置文本基线位置
    context.textBaseline = 'top';
    context.fillStyle = '#a6a5a5';

    // 绘制文本
    context.fillText(nickName, 95, 18);
    context.save();

    console.log('Draw NickName');

    const _textWidth = context.measureText(nickName).width;
    const _textHeight =
      context.measureText(nickName).actualBoundingBoxAscent +
      context.measureText(nickName).actualBoundingBoxDescent;

    await this.setState({
      nickNameWidth: _textWidth,
      nickNameHeight: _textHeight
    });

    // 返回渲染文本的宽度
    return _textWidth;
  }

  drawMeme(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    imgPath: string
  ) {
    if (!context) {
      return;
    }
    imgPath;

    // 计算起始位置
    const _imgStartX = 10 + 75 + 10;
    const _imgStartY = 18 + 12 + 5;

    // 计算剩下最大的渲染距离
    const _maxDrawWidth = canvas.clientWidth - _imgStartX - 10;
    const _maxDrawHeight = canvas.clientHeight - _imgStartY - 10;

    // 创建表情图
    const memeImg = new Image();
    memeImg.src = imgPath;

    // 渲染表情图
    memeImg.onload = () => {
      let _imgWidth = memeImg.width;
      let _imgHeight = memeImg.height;

      console.log(_imgWidth, _imgHeight);

      if (_imgWidth > _maxDrawWidth) {
        const _setp = _imgWidth / _maxDrawWidth;

        _imgWidth = _imgWidth / _setp;
        _imgHeight = _imgHeight / _setp;
      }

      // if (_imgHeight > _maxDrawHeight) {
      //   _imgHeight = _imgHeight / (_imgHeight / _maxDrawHeight);
      //   _imgHeight = _imgHeight / (_imgHeight / _maxDrawHeight);
      // }

      console.log(_imgWidth, _imgHeight);

      // 渲染
      context.drawImage(
        memeImg,
        0,
        0,
        memeImg.width,
        memeImg.height,
        _imgStartX,
        _imgStartY,
        _imgWidth,
        _imgHeight
      );

      context.restore();
    };
  }

  render() {
    // const { canvas, ctx } = this.state;

    // // 渲染圆角头像
    // this.drawRadiusProfilePicture(ctx, BaseImg);

    // // 渲染昵称
    // this.drawNickName(ctx, '屎包');
    // // console.log(nickNameWidth, nickNameHeight);

    // // 渲染表情图
    // this.drawMeme(canvas, ctx, JieGe);

    return <canvas ref={this.canvasRef} />;
  }
}

export default CanvasDraw;
