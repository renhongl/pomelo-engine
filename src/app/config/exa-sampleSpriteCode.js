export default `
\`\`\`js
import BaseExample from "./baseExample";
import { Game, RenderObj } from "../pomelo-engine/core";

export default class BaseExample {
  constructor(container) {
    this.container = container;
  }

  init() {
    let w = this.container.offsetWidth;
    let h = this.container.offsetHeight;
    this.game = new Game({ container: this.container });
    this.scene = this.game.sceneManager.createScene({
      name: "title",
      x: 0,
      y: 0,
      w,
      h
    });
    this.game.showFrames();
    this.game.run(60);
    this.render();
  }

  render() {}

  destory() {}

  stopGame() {
    this.game.stop();
    this.game.sceneManager.clearAll();
    this.destory();
  }
}

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
\`\`\`
`;
