export default `
\`\`\`js
import { Stick } from "../pomelo-engine/sprite";

export default function(scene) {
  let stick = new Stick({
    x: 100,
    y: 200,
    w: 50,
    h: 10
  });
  scene.addRObj(stick);
}
\`\`\`
`;
