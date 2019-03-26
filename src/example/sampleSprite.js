import { SampleSprite } from "../pomelo-engine/sprite";
import BaseExample from "./baseExample";

export default class Example extends BaseExample {
  render() {
    let sampleSprite = new SampleSprite({
      x: 40,
      y: 40,
      w: 200,
      h: 200
    });
    this.scene.addRObj(sampleSprite);
  }
}
