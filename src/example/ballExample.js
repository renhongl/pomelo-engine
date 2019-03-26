import { Ball } from "../pomelo-engine/sprite";
import { utils } from "../pomelo-engine/core";
import BaseExample from "./baseExample";

export default class Example extends BaseExample {
  render() {
    for (let i = 0; i < 50; i++) {
      let ball = new Ball({
        x: Math.random() * 500 + 20,
        y: Math.random() * 400 + 20,
        r: 10,
        dx: Math.random() * 3 + 1,
        dy: Math.random() * 3 + 1,
        color: utils.randomColor()
      });
      this.scene.addRObj(ball);
    }
  }
}
