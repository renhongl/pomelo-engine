import { Sprite, Key } from "../core";

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
