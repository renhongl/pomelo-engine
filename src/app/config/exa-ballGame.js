export default `
\`\`\`js
import { Sprite, Key, Resource } from "../pomelo-engine/core";
import BaseExample from "./baseExample";

export class End extends Sprite {
  render(ctx) {
    ctx.font = "30px Arial";
    ctx.strokeText("Game Over!", 10, 50);
  }
}

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

class Ball extends Sprite {
  constructor(args) {
    super(args);
    this.r = args.r;
    this.color = "#000";
    this.stick = args.stick;
    this.state = 0;
    this.bricks = args.bricks;
    this.game = args.game;
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
    if (this.state === 2) {
      return;
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
    this.ballOut();
    super.update();
  }

  ballOut() {
    if (this.y + this.r * 2 >= this.owner.h) {
      this.state = 2;
      this.showOver();
    }
  }

  showOver() {
    let endSc = this.game.sceneManager.createScene({
      name: "endSc",
      x: this.game.container.clientWidth / 2 - 100,
      y: this.game.container.clientHeight / 2 - 50,
      w: 200,
      h: 100
    });
    let end = new End({
      name: "end"
    });
    endSc.addRObj(end);
    this.game.sceneManager.bringToFront("endSc");
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
      name: \`reward\${brick.x + "" + brick.y}\`,
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
  getStick() {
    let stick = new MyStick({
      name: "stick",
      x: 100,
      y: 500,
      w: 100,
      h: 10,
      color: "#1976d2"
    });
    return stick;
  }

  getBricks(brickData) {
    let bricks = [];
    for (let i = 0; i < brickData.length; i++) {
      for (let j = 0; j < brickData[i].length; j++) {
        let brick = new Brick({
          name: \`brick\${i + "" + j}\`,
          x: (80 + 1) * j + 20,
          y: (20 + 1) * i + 20,
          w: 80,
          h: 20,
          value: brickData[i][j],
          isVisible: Boolean(brickData[i][j])
        });
        bricks.push(brick);
      }
    }
    return bricks;
  }

  getBall(stick, bricks, game) {
    let ball = new Ball({
      name: "ball",
      x: stick.x + stick.w / 2,
      y: stick.y - 5,
      r: 5,
      stick,
      bricks,
      game
    });
    return ball;
  }

  render() {
    let self = this;
    const config = [
      {
        name: "brickData",
        desc: "Render silly brickes...",
        src: "./data/brickes.json",
        type: "JSON"
      }
    ];
    Resource.load(config, {
      callback(resources) {
        const { brickData } = resources;
        self.stick = self.getStick();
        self.bricks = self.getBricks(brickData);
        self.ball = self.getBall(self.stick, self.bricks, self.game);
        self.scene.addRObj(self.stick);
        for (let i = 0; i < self.bricks.length; i++) {
          self.scene.addRObj(self.bricks[i]);
        }
        self.scene.addRObj(self.ball);
      }
    });
  }
}


\`\`\`
`;
