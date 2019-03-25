import { SampleSprite } from "../pomelo-engine/sprite";

export default function(scene) {
  let sampleSprite = new SampleSprite({
    x: 40,
    y: 40,
    w: 200,
    h: 200
  });
  scene.addRObj(sampleSprite);
}
