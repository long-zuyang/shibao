/**
   * 渲染圆角头像
   * @param canvas Canvas DOM对象
   * @param context Canvas Context上下文
   * @param imgUrl 头像地址
   */
  function drawRadiusProfilePicture(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D | null,
    imgUrl: string
  ) {
    if (!context) {
      return;
    }
    // 创建头像图片
    const picture = new Image();
    picture.src = imgUrl;

    // 图片加载完成后绘制圆角图片
    picture.onload = () => {
      // 获取Canvas的宽高
      const canvasWidth = canvas.clientWidth;
      const canvasHeight = canvas.clientHeight;

      // 缩放Canvas提升分辨率
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvasWidth * dpr;
      canvas.height = canvasHeight * dpr;
      context.scale(dpr, dpr);

      const x = 10;
      const y = 10;
      const width = 50;
      const height = 50;
      const radius = 5;
      context.save();
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

      // 清除路径，确保clip()只应用于当前绘制的路径
      context.beginPath();
      context.restore();
    };
  }
