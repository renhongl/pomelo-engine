import { SampleSprite } from "../pomelo-engine/sprite";
import BaseExample from "./baseExample";

export default class Example extends BaseExample {
  render() {
    let sampleSprite = new SampleSprite({
      w: 200,
      h: 200
    });
    this.scene.addRObj(sampleSprite);
    sampleSprite.moveTo(
      sampleSprite.owner.w / 2 - sampleSprite.w / 2,
      sampleSprite.owner.h / 2 - sampleSprite.h / 2
    );
  }
}
