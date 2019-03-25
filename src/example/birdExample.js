import birdImg from "../images/bird.png";
import { Frames, Animations } from "../pomelo-engine/core";
import { Bird } from "../pomelo-engine/sprite";

export default function(scene) {
  let img = document.createElement("img");
  img.src = birdImg;
  img.setAttribute("id", "birdImg");
  document.getElementById("root").append(img);
  let runFrames = new Frames({
    name: "b_run",
    img: img
  });
  for (let i = 0; i < 8; i++) {
    runFrames.add(130.5 * i, 0, 130.5, 80);
  }
  let anims = new Animations();
  anims.add("run", runFrames, true);
  let bird = new Bird({ x: 50, y: 50, w: 80, h: 80, dx: 1 });
  bird.setAnimSpeed(0.5);
  bird.setAnims(anims, "run");
  scene.addRObj(bird);
}
