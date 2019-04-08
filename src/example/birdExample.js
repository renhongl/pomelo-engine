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

export default class Example extends BaseExample {
  render() {
    let resourceMgmt = new Resource({ config, game: this.game });
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
    });
  }
}
