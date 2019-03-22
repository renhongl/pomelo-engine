import { Sprite } from "../core";

export class Bird extends Sprite {
  constructor(args) {
    super(args);
  }

  update() {
    let w = this.owner.w;
    let h = this.owner.h;
    if (this.x < 20 || this.x > w - 20) {
      this.dx = -this.dx;
      this.isXFlip = this.dx < 0;
    }
    super.update();
  }
}
