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

interface DateTime {
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
  second: string;
  millisecond: string;
}
/**
 * 获取当前时间信息
 * @returns 当前时间
 */
export function getCurrentDateTime(): DateTime {
  const now = new Date();
  const year = now.getFullYear().toString().padStart(4, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hour = now.getHours().toString().padStart(2, '0');
  const minute = now.getMinutes().toString().padStart(2, '0');
  const second = now.getSeconds().toString().padStart(2, '0');
  const millisecond = now.getMilliseconds().toString().padStart(3, '0');
  return { year, month, day, hour, minute, second, millisecond };
}
