import { CanvasBaseNode, CanvasBaseNodeConfig } from "./node";

export interface CanvasLinePoint {
  id: string;
  x: number;
  y: number;
  text?: string;
}

export interface CanvasLineConfig extends CanvasBaseNodeConfig {
  points: CanvasLinePoint[];
}

export class CanvasLine extends CanvasBaseNode {
  points: CanvasLinePoint[];

  constructor(config: CanvasLineConfig) {
    super(config);
    this.points = config.points;
  }

  path(ctx: CanvasRenderingContext2D) {
    const [first, ...rest] = this.points;
    ctx.moveTo(first.x, first.y);
    rest.forEach((p) => {
      ctx.lineTo(p.x, p.y);
    });
  }

  render = (ctx: CanvasRenderingContext2D, offscreen?: boolean) => {
    ctx.save();

    if (offscreen) {
      ctx.lineWidth = 5;
      ctx.strokeStyle = this.hexId;
      this.path(ctx);
      ctx.stroke();
      ctx.restore();
      return;
    }

    if (this.active) {
      ctx.lineWidth = 5;
    } else {
      ctx.lineWidth = 1;
    }

    this.path(ctx);
    console.log(ctx.lineWidth, this.active);
    ctx.stroke();

    ctx.restore();
  };
}
