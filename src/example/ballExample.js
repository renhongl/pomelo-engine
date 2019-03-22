import { Ball } from "../pomelo-engine/sprite";
import { utils } from "../pomelo-engine/core";

export function renderBalls(scene) {
  for (let i = 0; i < 50; i++) {
    let ball = new Ball({
      x: Math.random() * 500 + 20,
      y: Math.random() * 400 + 20,
      r: 10,
      dx: Math.random() * 3 + 1,
      dy: Math.random() * 3 + 1,
      color: utils.randomColor()
    });
    scene.addRObj(ball);
  }
}
