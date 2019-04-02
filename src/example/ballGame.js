import { Stick } from "../pomelo-engine/sprite";
import { Sprite, Key } from "../pomelo-engine/core";
import BaseExample from "./baseExample";

class Ball extends Sprite {
  constructor(args) {
    super(args);
    this.r = args.r;
    this.color = "#000";
    this.stick = args.stick;
    this.state = 0;
    this.bricks = args.bricks;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    if (this.state === 0 && Key.pressed(Key.SPACE)) {
      this.dx = -3;
      this.dy = -3;
      this.state = 1;
    }
    let w = this.owner.w,
      h = this.owner.h;

    if (this.x < this.r || this.x > w - this.r) {
      this.dx = -this.dx;
    }
    if (this.y < this.r || this.y > h - this.r) {
      this.dy = -this.dy;
    }
    this.ballHitStick();
    this.ballHitBricks();
    super.update();
  }

  ballHitStick() {
    let minX = this.stick.x;
    let maxX = this.stick.x + this.stick.w;
    let minY = this.stick.y;
    let maxY = this.stick.y + this.stick.h;
    if (this.x >= minX && this.x <= maxX && this.y >= minY && this.y <= maxY) {
      this.dy = -this.dy;
      this.dx = this.dx + this.stick.dx;
    }
  }

  ballHitBricks() {
    for (let i = 0; i < this.bricks.length; i++) {
      let minX = this.bricks[i].x;
      let maxX = this.bricks[i].x + this.bricks[i].w;
      let minY = this.bricks[i].y;
      let maxY = this.bricks[i].y + this.bricks[i].h;
      if (
        this.bricks[i].isVisible &&
        this.x >= minX &&
        this.x <= maxX &&
        this.y >= minY &&
        this.y <= maxY
      ) {
        this.dy = -this.dy;
        this.bricks[i].isVisible = false;
        if (this.bricks[i].value > 1) {
          this.generateReward(this.bricks[i]);
        }
      }
    }
  }

  generateReward(brick) {
    let reward = new Reward({
      name: `reward${brick.x + "" + brick.y}`,
      x: brick.x,
      y: brick.y,
      w: brick.w,
      h: brick.h,
      dy: 1,
      value: brick.value
    });
    this.owner.addRObj(reward);
  }
}

class Brick extends Sprite {
  constructor(args) {
    super(args);
    this.value = args.value;
  }
  render(ctx) {
    ctx.fillStyle = "#afb42b";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
  update() {
    super.update();
  }
}

class Reward extends Sprite {
  constructor(args) {
    super(args);
    this.color = args.color;
    this.value = args.value;
  }
  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    if (this.value === 2) {
      ctx.strokeStyle = "#fff";
      ctx.strokeText("Reward Size", this.x, this.y + this.h / 2);
    }
    if (this.value === 3) {
      ctx.strokeStyle = "#fff";
      ctx.strokeText("Reward Speed", this.x, this.y + this.h / 2);
    }
  }
  update() {
    super.update();
  }
}

class MyStick extends Stick {
  constructor(args) {
    super(args);
    this.originW = this.w;
    this.originSpeed = this.speed;
  }
  update() {
    this.stickHitReward();
    super.update();
  }

  resetState(status) {
    switch (status) {
      case 2:
        this.w = this.originW;
        break;
      case 3:
        this.speed = this.originSpeed;
        break;
      default:
        break;
    }
  }

  updateState(status) {
    switch (status) {
      case 2:
        this.w = this.originW * 2;
        setTimeout(() => {
          this.resetState(status);
        }, 30000);
        break;
      case 3:
        this.speed = this.originSpeed * 2;
        setTimeout(() => {
          this.resetState(status);
        }, 30000);
        break;
      default:
        break;
    }
  }

  stickHitReward() {
    let rObjs = this.owner.rObjs;
    let minX = this.x;
    let maxX = this.x + this.w;
    let minY = this.y;
    let maxY = this.y + this.h;
    for (let i = 0; i < rObjs.length; i++) {
      if (rObjs[i].name.includes("reward")) {
        if (
          rObjs[i].x >= minX - rObjs[i].w &&
          rObjs[i].x <= maxX + rObjs[i].w &&
          rObjs[i].y + rObjs[i].h >= minY &&
          rObjs[i].y + rObjs[i].h <= maxY
        ) {
          rObjs[i].isVisible = false;
          this.updateState(rObjs[i].value);
        }
      }
    }
  }
}

export default class Example extends BaseExample {
  render() {
    let bricks = [];
    this.brickData = [
      [1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1],
      [1, 2, 3, 2, 3, 1]
    ];
    let stick = new MyStick({
      name: "stick",
      x: 100,
      y: 500,
      w: 100,
      h: 10,
      color: "#1976d2"
    });
    for (let i = 0; i < this.brickData.length; i++) {
      for (let j = 0; j < this.brickData[i].length; j++) {
        let brick = new Brick({
          name: `brick${i + "" + j}`,
          x: (80 + 1) * j + 20,
          y: (20 + 1) * i + 20,
          w: 80,
          h: 20,
          value: this.brickData[i][j],
          isVisible: Boolean(this.brickData[i][j])
        });
        this.scene.addRObj(brick);
        bricks.push(brick);
      }
    }
    this.ball = new Ball({
      name: "ball",
      x: stick.x + stick.w / 2,
      y: stick.y - 5,
      r: 5,
      stick,
      bricks
    });
    this.scene.addRObj(stick);
    this.scene.addRObj(this.ball);
  }
}
