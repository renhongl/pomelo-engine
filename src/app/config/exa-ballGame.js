export default `
\`\`\`js
import { Stick } from "../pomelo-engine/sprite";
import { Sprite, Game, Key } from "../pomelo-engine/core";
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
      }
    }
  }
}

class Brick extends Sprite {
  render(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
  update() {}
}

class BallGame extends Game {}

export default class Example extends BaseExample {
  init() {
    let w = this.container.offsetWidth;
    let h = this.container.offsetHeight;
    this.game = new BallGame({ container: this.container });
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
  render() {
    let bricks = [];
    this.brickData = [
      [1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1]
    ];
    let stick = new Stick({
      x: 100,
      y: 500,
      w: 150,
      h: 10
    });
    for (let i = 0; i < this.brickData.length; i++) {
      for (let j = 0; j < this.brickData[i].length; j++) {
        let brick = new Brick({
          x: (100 + 5) * j + 50,
          y: (30 + 5) * i + 50,
          w: 100,
          h: 30,
          position: [i, j],
          isVisible: Boolean(this.brickData[i][j])
        });
        this.scene.addRObj(brick);
        bricks.push(brick);
      }
    }
    this.ball = new Ball({
      x: 120,
      y: 495,
      r: 5,
      stick,
      bricks
    });
    this.scene.addRObj(stick);
    this.scene.addRObj(this.ball);
  }
}
\`\`\`
`;
