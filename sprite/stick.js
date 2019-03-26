import { Sprite, Key } from "../core";

export class Stick extends Sprite {
  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.closePath();
  }

  update() {
    if (Key.pressed(Key.LEFT)) {
      this.dx = -5;
    } else if (Key.pressed(Key.RIGHT)) {
      this.dx = 5;
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
