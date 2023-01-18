export function getHexFromId(id: number) {
  const uniqIdBase16 = Number(id).toString(16).padStart(6, '0');
  return `#${uniqIdBase16}`;
}

export function getIdFromRGB(rgb: number[]) {
  const [r, g, b] = rgb;
  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');
  return parseInt(`${hexR}${hexG}${hexB}`, 16);
}

export function getPointRGBFromRenderContext(ctx: CanvasRenderingContext2D, x: number, y: number) {
  const [r, g, b] = ctx.getImageData(x, y, 1, 1).data;
  return [r, g, b];
}
