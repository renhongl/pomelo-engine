import { Stick } from "../pomelo-engine/sprite";
import { Game } from "../pomelo-engine/core";

import BaseExample from "./baseExample";

export default class Example extends BaseExample {
  init() {
    let w = this.container.offsetWidth;
    let h = this.container.offsetHeight;
    this.game = new Game({ container: this.container });
    this.scene = this.game.sceneManager.createScene({
      name: "title",
      x: 0,
      y: 0,
      w,
      h
    });
  }
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
