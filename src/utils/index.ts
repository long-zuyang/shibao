/**
 * 把图片转换为Base64格式
 * @returns
 */
export function imgToBase64(imgPath: string): string {
  const canvas = document.createElement('canvas');

  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = imgPath;

  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return '';
    }
    ctx.drawImage(img, 0, 0);
    const base64 = canvas.toDataURL();

    return base64;
  };
  return '';
}

/**
 * 获取当前用户的操作系统
 * @returns string 当前操作系统
 */
export function getOS() {
  let os = '';
  if (
    navigator.userAgent.indexOf('Android') > -1 ||
    navigator.userAgent.indexOf('Linux') > -1
  ) {
    os = 'Android';
  } else if (navigator.userAgent.indexOf('iPhone') > -1) {
    os = 'iOS';
  } else if (navigator.userAgent.indexOf('Windows Phone') > -1) {
    os = 'WP';
  } else {
    os = 'Others';
  }

  return os;
}
