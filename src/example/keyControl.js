import { Key, Sprite } from "../pomelo-engine/core";
import BaseExample from "./baseExample";

export class Stick extends Sprite {
  constructor(args) {
    super(args);
    this.color = args.color;
    this.speed = args.speed || 5;
  }
  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.closePath();
  }

  update() {
    if (Key.pressed(Key.LEFT)) {
      this.dx = -this.speed;
    } else if (Key.pressed(Key.RIGHT)) {
      this.dx = this.speed;
    } else {
      this.dx = 0;
    }
    if (this.x <= 0 && Key.pressed(Key.LEFT)) {
      this.dx = 0;
    }
    if (this.x + this.w >= this.owner.w && Key.pressed(Key.RIGHT)) {
      this.dx = 0;
    }
    super.update();
  }
}

export default class Example extends BaseExample {
  render() {
    let stick = new Stick({
      x: 100,
      y: 200,
      w: 50,
      h: 10,
      color: "#1976d2"
    });
    this.scene.addRObj(stick);
  }
}
