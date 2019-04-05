export default `
\`\`\`js
import { utils, RenderObj, Game } from "../pomelo-engine/core";
import BaseExample from "./baseExample";

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

export class Ball extends RenderObj {
  constructor(args) {
    super(args);
    this.r = args.r || 10;
    this.color = args.color || "#000";
  }

  update() {
    let w = this.owner.w,
      h = this.owner.h;

    if (this.x < this.r || this.x > w - this.r) {
      this.dx = -this.dx;
    }
    if (this.y < this.r || this.y > h - this.r) {
      this.dy = -this.dy;
    }
    super.update();
  }

  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r - 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.stroke();
  }
}

export default class Example extends BaseExample {
  render() {
    for (let i = 0; i < 50; i++) {
      let ball = new Ball({
        x: Math.random() * 500 + 20,
        y: Math.random() * 400 + 20,
        r: 10,
        dx: Math.random() * 3 + 1,
        dy: Math.random() * 3 + 1,
        color: utils.randomColor()
      });
      this.scene.addRObj(ball);
    }
  }
}

\`\`\`
`;
