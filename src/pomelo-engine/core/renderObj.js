export class RenderObj {
  static SID = 0;

  constructor(args) {
    this.name = args.name || `Unnamed_${RenderObj.SID}`;
    this.owner = args.owner || null;
    //x, y 方向坐标
    this.x = args.x || 0;
    this.y = args.y || 0;
    //对象的宽度和高度
    this.w = args.w || 0;
    this.h = args.h || 0;
    //x和y方向的速度
    this.dx = args.dx || 0;
    this.dy = args.dy || 0;
    //x和y方向的加速度
    this.vx = args.vx || 0;
    this.vy = args.vy || 0;
    this.deg = args.deg || 0;
    this.zIndex = args.zIndex || 0;
    this.isVisible = args.isVisible || true;
    this.canRemove = args.canRemove || false;
  }

  //设置位置
  moveTo(x, y) {
    this.x = x || this.x;
    this.y = y || this.y;
  }

  //移动
  move(xOff, yOff) {
    this.x += xOff;
    this.y += yOff;
  }

  //移动一小步
  moveStep() {
    this.dx += this.vx;
    this.dy += this.vy;
    this.x += this.dx;
    this.y += this.dy;
  }

  //旋转角度
  rotate(deg) {
    this.deg = deg;
  }

  //更新方法， 每一帧用
  update() {
    this.moveStep();
  }

  render(ctx) {
    return;
  }
}
