import { Frames, Animations, Resource } from "../pomelo-engine/core";
import { Bird } from "../pomelo-engine/sprite";
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

export default class Example extends BaseExample {
  destory() {
    Resource.destory();
  }
  render() {
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
        console.log("Starting loading...");
      },
      loaded(name) {
        console.log("Loaded: " + name);
      },
      complete() {
        console.log("Completed loading");
      },
      callback: callback
    });
  }
}
