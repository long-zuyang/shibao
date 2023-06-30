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
