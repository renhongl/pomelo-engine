export default `
\`\`\`js
import {
  Frames,
  Animations,
  Resource,
  Sprite,
  Audio,
  Loading
} from "../pomelo-engine/core";
import BaseExample from "./baseExample";

const config = [
  {
    name: "bird",
    desc: "Need some birds...",
    src: "./images/bird.png",
    type: "IMAGE"
  },
  {
    name: "world",
    desc: "Creating awesome world...",
    src: "./images/bg.jpg",
    type: "IMAGE"
  },
  {
    name: "json",
    desc: "Getting nice knowloadge...",
    src: "./data/config.json",
    type: "JSON"
  },
  {
    name: "audio",
    desc: "Getting sound for world...",
    src: "./media/horse.ogg",
    type: "AUDIO"
  }
];

export class Bird extends Sprite {
  update() {
    let w = this.owner.w;
    if (this.x < 20 || this.x > w - 20) {
      this.dx = -this.dx;
      this.isXFlip = this.dx < 0;
    }
    super.update();
  }
}

class LoadingContent extends Sprite {
  constructor(args) {
    super(args);
    this.w = 200;
    this.h = 20;
    this.from = 0;
    this.percentage = 0;
    this.loadingSpeed = args.loadingSpeed || 10;
  }

  render(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.from, this.h);
    ctx.strokeStyle = "blue";
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.stroke();
    ctx.strokeText(
      Number.parseInt((this.from / this.w) * 100) + "%",
      this.x + 80,
      this.y - 10
    );
  }

  update() {
    if (this.from < this.w * this.percentage) {
      this.from += this.loadingSpeed;
    }
    super.update();
  }
}

class CusLoading extends Loading {
  start(configArr) {
    this.container = this.game.container;
    this.sceneName = "loadingSc";
    this.scene = this.game.sceneManager.createScene({
      name: this.sceneName,
      x: 0,
      y: 0,
      w: this.container.clientWidth,
      h: this.container.clientHeight
    });
    this.loadingContent = new LoadingContent({
      x: this.container.clientWidth / 2 - 100,
      y: this.container.clientHeight / 2 - 10
    });
    this.scene.addRObj(this.loadingContent);
    this.game.sceneManager.bringToFront(this.sceneName);
  }

  loaded(config, source, percentage) {
    this.loadingContent.percentage = percentage;
  }

  completed(resources) {
    this.game.sceneManager.bringToBack(this.sceneName);
  }
}

export default class Example extends BaseExample {
  render() {
    let cusLoading = new CusLoading();
    let resourceMgmt = new Resource({
      config,
      game: this.game,
      loading: cusLoading
    });
    resourceMgmt.load().then(resources => {
      this.scene.setBGImg(resources.world, 1);
      let runFrames = new Frames({
        name: "b_run",
        img: resources.bird
      });
      for (let i = 0; i < 8; i++) {
        runFrames.add(130.5 * i, 0, 130.5, 80);
      }
      let anims = new Animations();
      anims.add("run", runFrames, true);
      let bird = new Bird({ x: 50, y: 50, w: 80, h: 80, dx: 1 });
      bird.setAnimSpeed(0.5);
      bird.setAnims(anims, "run");
      this.scene.addRObj(bird);
      Audio.play(resources.audio);
    });
  }
}



\`\`\`
`;
