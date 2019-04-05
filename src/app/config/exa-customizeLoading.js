export default `
\`\`\`js
import { Frames, Animations, Resource, Sprite } from "../pomelo-engine/core";
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
  }
];

export class Loading extends Sprite {
  constructor(args) {
    super(args);
    this.text = args.text;
  }

  render(ctx) {
    ctx.font = "30px Arial";
    ctx.strokeText(this.text, 10, 50);
  }
}

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

export default class Example extends BaseExample {
  destory() {
    Resource.destory();
  }
  render() {
    let self = this;
    const callback = resources => {
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
    };

    Resource.load(config, {
      start() {
        self.loadingSc = self.game.sceneManager.createScene({
          name: "loadingSc",
          x: 0,
          y: 0,
          w: self.w,
          h: self.h
        });
        self.loading = new Loading({
          name: "loading",
          text: "Start Loading..."
        });
        self.loadingSc.addRObj(self.loading);
      },
      loaded(name) {
        self.loading.text = "Loading " + name + "...";
      },
      completed() {
        self.game.sceneManager.bringToBack("loadingSc");
      },
      callback: callback
    });
  }
}


\`\`\`
`;
