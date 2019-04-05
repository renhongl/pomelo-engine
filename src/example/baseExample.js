import { Game } from "../pomelo-engine/core";

export default class BaseExample {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.w = this.container.offsetWidth;
    this.h = this.container.offsetHeight;
    this.game = new Game({ container: this.container });
    this.scene = this.game.sceneManager.createScene({
      name: "main",
      x: 0,
      y: 0,
      w: this.w,
      h: this.h
    });
    this.game.showFrames();
    this.game.run(60);
    this.render();
  }

  render() {}

  destory() {}

  stopGame() {
    this.game.stop();
    this.game.sceneManager.clearAll();
    this.destory();
  }
}
