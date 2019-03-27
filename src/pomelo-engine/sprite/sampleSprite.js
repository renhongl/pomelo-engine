import { RenderObj } from "../core";

export class SampleSprite extends RenderObj {
  render(ctx) {
    ctx.fillStyle = "#1976d2";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
