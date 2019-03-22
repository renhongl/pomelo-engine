import { Game } from "./pomelo-engine/core";
import "./pomelo-engine/styles.css";

import "./style.css";

// import { renderBird } from "./example/birdExample";
// import { renderSampleSprite } from "./example/sampleSprite";
// import { renderBalls } from "./example/ballExample";

let container = document.getElementById("example");
let w = container.offsetWidth;
let h = container.offsetHeight;
let game = new Game({ container });

game.showFrames();

let scene = game.sceneManager.createScene({
  name: "title",
  x: 30,
  y: 10,
  w,
  h
});

scene.setBGImg("/images/bg.jpg", 0);
game.run(60);

// renderBalls(scene);
// renderBird(scene);
// renderSampleSprite(scene);
