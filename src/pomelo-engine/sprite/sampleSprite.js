import { RenderObj } from "../core";

export class SampleSprite extends RenderObj {
  render(ctx) {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
