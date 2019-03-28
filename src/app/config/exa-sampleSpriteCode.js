export default `
\`\`\`js
import { SampleSprite } from "../pomelo-engine/sprite";

export function renderSampleSprite(scene) {
  let sampleSprite = new SampleSprite({
    x: 40,
    y: 40,
    w: 20,
    h: 20
  });
  scene.addRObj(sampleSprite);
}

\`\`\`
`;
