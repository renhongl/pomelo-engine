import { Game } from "../pomelo-engine/core";

export default class BaseExample {
  constructor(container) {
    this.container = container;
  }

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
    this.game.showFrames();
    this.game.run(60);
    this.render();
  }

  render() {}

  stopGame() {
    this.game.stop();
    this.game.sceneManager.clearAll();
  }
}