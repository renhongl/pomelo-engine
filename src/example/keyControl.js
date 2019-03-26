import { Stick } from "../pomelo-engine/sprite";
import { Sprite } from "../pomelo-engine/core";
import BaseExample from "./baseExample";

class Ball extends Sprite {
  constructor(args) {
    super(args);
    this.r = args.r;
    this.color = "blue";
    this.stick = args.stick;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
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
    let minX = this.stick.x;
    let maxX = this.stick.x + this.stick.w;
    let minY = this.stick.y;
    let maxY = this.stick.y + this.stick.h;
    if (this.x >= minX && this.x <= maxX && this.y >= minY && this.y <= maxY) {
      this.dy = -this.dy;
    }
    super.update();
  }
}

export default class Example extends BaseExample {
  render() {
    let stick = new Stick({
      x: 100,
      y: 500,
      w: 150,
      h: 10
    });
    this.scene.addRObj(stick);
    let ball = new Ball({
      x: 120,
      y: 495,
      r: 5,
      dx: 3,
      dy: -3,
      stick
    });
    this.scene.addRObj(ball);
  }
}
