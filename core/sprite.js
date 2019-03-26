import { RenderObj } from "./renderObj";
import { FrameCtrl } from "./frames";
import { degreesToRadians } from "./utils";

export class Sprite extends RenderObj {
  constructor(args) {
    super(args);
    this.anims = null;
    this.animCtrl = new FrameCtrl({});
    this.isXFlip = false;
    this.isYFlip = false;
    this.scaleX = 1;
    this.scaleY = 1;
  }

  setAnims(animations, currAnimName) {
    currAnimName = currAnimName || "def";
    this.anims = animations;
    this.animCtrl.setAnims(animations, currAnimName);
  }

  addAnim(name, frames, isCurrent) {
    this.anims.add(name, frames);
    isCurrent && this.animCtrl.setCurrent(name);
  }

  removeAnim(name) {
    this.anims.remove(name);
  }

  setCAnim(name) {
    this.animCtrl.setCurrent(name);
  }

  setAnimSpeed(sp) {
    this.animCtrl.speed = sp;
  }

  getAnim(name) {
    return this.anims.get(name);
  }

  getCurrentAnim() {
    return this.animCtrl.getCurrent();
  }

  getCurrentFrame() {
    return this.animCtrl.getCurrFrame();
  }

  getNextFrame() {
    return this.animCtrl.getNextFrame();
  }

  render(ctx) {
    ctx.translate(this.x, this.y);
    let hw = 0.5 * this.w;
    let hh = 0.5 * this.h;
    let scaleX = this.isXFlip ? -this.scaleX : this.scaleX;
    let scaleY = this.isYFlip ? -this.scaleY : this.scaleY;
    if (this.deg !== 0) {
      ctx.rotate(degreesToRadians(this.deg));
    }
    ctx.scale(scaleX, scaleY);
    let f = this.getNextFrame();
    ctx.drawImage(f[0], f[1], f[2], f[3], f[4], -hw, -hh, this.w, this.h);
  }
}
