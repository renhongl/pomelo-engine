import { Stick } from "../pomelo-engine/sprite";

import BaseExample from "./baseExample";

export default class Example extends BaseExample {
  render() {
    let stick = new Stick({
      x: 100,
      y: 200,
      w: 50,
      h: 10
    });
    this.scene.addRObj(stick);
  }
}
