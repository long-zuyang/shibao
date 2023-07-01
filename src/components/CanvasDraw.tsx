import React from 'react';
import {
  Uploader,
  UploaderValueItem,
  Button,
  Flex,
  Space,
  Toast,
  Input,
  Cell,
  NoticeBar
} from 'react-vant';

import { getOS, getCurrentDateTime } from '@/utils';

const BaseImg = 'https://s2.loli.net/2023/06/30/jsnZTLi4RK2MbJG.jpg';
const Ikun1 = 'https://s2.loli.net/2023/06/30/Sq2UilZWzaGuQ5M.png';

interface State {
  baseImg: string;
  imgPath: string;
  nickName: string;
}

interface DrawLength {
  maxDrawWidth: number;
  maxDrawHeight: number;
  imgStartX: number;
  imgStartY: number;
  contextHeight: number;
}

class CanvasDraw extends React.Component {
  state: State = {
    baseImg: BaseImg,
    imgPath: Ikun1,
    nickName: '屎包'
  };
  canvas: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;
  nickNameWidth = 0;
  nickNameHeight = 0;
  backBaseImg = BaseImg;

  drawMemeConfig: DrawLength = {
    maxDrawWidth: 0,
    maxDrawHeight: 0,
    imgStartX: 0,
    imgStartY: 0,
    contextHeight: 0
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

    this.canvas = canvas;
    this.ctx = ctx;

    // 初始化 Canvas
    this.initCanvas(canvas, ctx);

    // 渲染圆角头像
    this.drawRadiusProfilePicture(ctx, this.state.baseImg);

    // 渲染昵称
    this.drawNickName(ctx);

    // 渲染表情图
    this.drawMeme(canvas, ctx, this.state.imgPath);

    return;
  }

  componentDidUpdate(
    prevProps: Record<string, never>,
    prevState: State
  ): boolean {
    prevProps;
    if (prevState === this.state) {
      return false;
    }
    if (!this.canvas) {
      return false;
    }
    if (!this.ctx) {
      return false;
    }
    this.resetCanvas(this.ctx);

    // 渲染圆角头像
    this.drawRadiusProfilePicture(this.ctx, this.state.baseImg);

    // // 渲染昵称
    this.drawNickName(this.ctx);

    // console.log('Update');
    this.drawMeme(this.canvas, this.ctx, this.state.imgPath) as DrawLength;

    return true;
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

    // console.log('Canvas init.');
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
    picture.crossOrigin = 'anonymous';
    picture.src = imgPath;
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration: 0
    });

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

      // console.log('Draw Radius Profile Picture.');
    };
  }

  /**
   * 渲染昵称
   * @param context Canvas Context上下文
   * @param nickName 昵称
   */
  drawNickName(context: CanvasRenderingContext2D) {
    if (!context) {
      return 0;
    }

    context.font = '16px 微软雅黑';
    // 设置文本基线位置
    context.textBaseline = 'top';
    context.fillStyle = '#b2b2b2';

    // 绘制文本
    context.fillText(this.state.nickName, 95, 22);
    context.save();

    // console.log('Draw NickName');

    const _textWidth = context.measureText(this.state.nickName).width;
    const _textHeight =
      context.measureText(this.state.nickName).actualBoundingBoxAscent +
      context.measureText(this.state.nickName).actualBoundingBoxDescent;

    this.nickNameWidth = _textWidth;
    this.nickNameHeight = _textHeight;

    // 返回渲染文本的宽度
    return _textWidth;
  }

  drawMeme(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    imgPath: string
  ) {
    if (!context) {
      return {};
    }

    // 计算起始位置
    const _imgStartX = 10 + 75 + 10;
    let _imgStartY = 18 + 14 + 10;

    // 解决IOS在渲染图片时间距不足的问题
    if (getOS() == 'iOS') {
      _imgStartY += 10;
    }

    // 计算剩下最大的渲染距离
    const _maxDrawWidth = canvas.clientWidth - _imgStartX - 10;
    const _maxDrawHeight = canvas.clientHeight - _imgStartY - 10;

    // 创建表情图
    const memeImg = new Image();
    memeImg.crossOrigin = 'anonymous';
    memeImg.src = imgPath;

    // 渲染表情图
    memeImg.onload = () => {
      Toast.clear();

      let _imgWidth = memeImg.width;
      let _imgHeight = memeImg.height;

      // console.log(_imgWidth, _imgHeight);

      if (_imgWidth > _maxDrawWidth) {
        const _setp = _imgWidth / _maxDrawWidth;

        _imgWidth = _imgWidth / _setp;
        _imgHeight = _imgHeight / _setp;
      }

      // if (_imgHeight > _maxDrawHeight) {
      //   _imgHeight = _imgHeight / (_imgHeight / _maxDrawHeight);
      //   _imgHeight = _imgHeight / (_imgHeight / _maxDrawHeight);
      // }

      // console.log(_imgWidth, _imgHeight);

      // 储存渲染数据
      this.drawMemeConfig = {
        maxDrawWidth: _maxDrawWidth,
        maxDrawHeight: _maxDrawHeight,
        imgStartX: _imgStartX,
        imgStartY: _imgStartY,
        contextHeight: _imgHeight + _imgStartY + 10
      };

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

  /**
   * 重置Canvas
   */
  resetCanvas(context: CanvasRenderingContext2D) {
    if (!this.canvas) {
      return;
    }

    const { clientHeight, clientWidth } = this.canvas;

    context.clearRect(0, 0, clientWidth, clientHeight);
    context.save();

    context.fillStyle = '#f5f5f5';
    context.fillRect(0, 0, clientWidth, clientHeight);
    context.save();
    return;
  }

  handleSaveImg = () => {
    // console.log('AAA');
    const { canvas } = this;
    const { contextHeight } = this.drawMemeConfig;

    if (!canvas) return;
    // const dataURL = this.state.canvas?.toDataURL('image/png');
    // const link = document.createElement('a');
    // link.download = 'canvas.png';
    // link.href = dataURL;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;

    tempCanvas.style.width = canvas.clientWidth + 'px';
    tempCanvas.style.height = contextHeight + 'px';

    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;

    document.body.appendChild(tempCanvas);

    this.initCanvas(tempCanvas, tempCtx);

    // console.log('Camvas:', canvas.width / 3, canvas.height / 3);
    // console.log(contextHeight);

    // console.log(tempCanvas.clientWidth, tempCanvas.clientHeight);

    tempCtx.drawImage(
      canvas,
      0,
      0,
      canvas.width,
      contextHeight * 3,
      0,
      0,
      tempCanvas.clientWidth,
      tempCanvas.clientHeight
    );

    const dataURL = tempCanvas.toDataURL('image/png');
    const link = document.createElement('a');

    const { year, month, day, hour, minute, second, millisecond } =
      getCurrentDateTime();
    const fileName = `shibao_${year}${month}${day}_${hour}${minute}${second}_${millisecond}.png`;

    link.download = fileName;
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    document.body.removeChild(tempCanvas);
  };

  handleUpdateImg = (files: UploaderValueItem) => {
    // console.log(files);
    if (files.length == 0) {
      return;
    }

    const _isPpimg = (): string => {
      if (files.length == 2) {
        this.backBaseImg = this.state.baseImg;
        return files[1].url;
      } else {
        return this.backBaseImg;
      }
    };

    this.setState({
      imgPath: files[0].url,
      nickName: this.state.nickName,
      baseImg: _isPpimg()
    });
  };

  render() {
    // const { canvas, ctx } = this.state;

    // // 渲染圆角头像
    // this.drawRadiusProfilePicture(ctx, BaseImg);

    // // 渲染昵称
    // this.drawNickName(ctx, '屎包');
    // // console.log(nickNameWidth, nickNameHeight);

    // // 渲染表情图
    // this.drawMeme(canvas, ctx, JieGe);

    return (
      <>
        <Space direction="vertical">
          <canvas ref={this.canvasRef} />
          <NoticeBar
            scrollable
            background="#f5f5f5"
            color="#616161"
            text="上传组件中可上传两张图片，第一张是需要渲染的表情包，第二张是需要渲染的头像"
          />
          <Uploader
            maxCount={2}
            accept="image/jpg"
            onChange={this.handleUpdateImg}
          />
          <Cell>
            <Input
              value={this.state.nickName}
              suffix={
                <Button
                  size="small"
                  type="primary"
                  onClick={() => {
                    // 强制渲染
                    this.forceUpdate();
                  }}
                >
                  手动渲染
                </Button>
              }
              placeholder="请输入需要渲染的昵称"
              onChange={(val) => {
                this.setState({ nickName: val });
              }}
            />
          </Cell>

          <Flex>
            <Flex.Item span={24}>
              <Button onClick={this.handleSaveImg} type="primary" block>
                下载图片
              </Button>
            </Flex.Item>
          </Flex>
        </Space>
      </>
    );
  }
}

export default CanvasDraw;
