import BaseExample from "./baseExample";
import { RenderObj } from "../pomelo-engine/core";

export class SampleSprite extends RenderObj {
  render(ctx) {
    ctx.fillStyle = "#1976d2";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}

export default class Example extends BaseExample {
  render() {
    let sampleSprite = new SampleSprite({
      w: 200,
      h: 200
    });
    this.scene.addRObj(sampleSprite);
    sampleSprite.moveTo(
      sampleSprite.owner.w / 2 - sampleSprite.w / 2,
      sampleSprite.owner.h / 2 - sampleSprite.h / 2
    );
  }
}
