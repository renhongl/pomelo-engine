export const install = `# Installation

* NPM 

  \`\`\`js
  npm install pomelo-engine --save
  
  import { Game } from 'pomelo-engine/core';
  
  import 'pomelo-engine/styles.css';
  \`\`\`
* HTML

  * Download source code from download page.
  
  * Copy **pomelo-engine** folder to your library.

  * Add **script** for your html, link to: **path/to/pomelo-engine/core/index.js**.

  * Add **script** for your html, link to: **path/to/pomelo-engine/sprite/index.js**.
`;

export const getStarted = `
  # Get Started
  
  1. Create Game.
  
     \`\`\`js
     import { Game } from "pomelo-engine/core";
  
     let game = new Game({ container });
     \`\`\`
  
  2. Create Scene and set background image.
  
     \`\`\`js
     import { Scene } from "pomelo-engine/core";
  
     this.scene = game.sceneManager.createScene({
       name: "title",
       x: 30,
       y: 10,
       w,
       h
     });
  
     this.scene.setBGImg("images/bg.jpg", 0);
     \`\`\`
  
  3. Run Game
  
     \`\`\`js
     //Show frame state on game screen
     game.showFrames();
     //Run game with 60 fps.
     game.run(60);
     \`\`\`
`;

export const coreConcept = `
# Core Concept

## Game
* Game containes the whole thing about game.

## Scene

* One story will has one scene.

* Containes one seperate story.

## RenderObj
* It is a object.

* Including render and update function.

* So it can render on the scene.

## Sprite
* It is implement from **RenderObj**.

* It has frame animation, so you can the a bird is flying, a dog is running.
`;

export const ballCode = `
\`\`\`js
import { Ball } from "../pomelo-engine/sprite";
import { utils } from "../pomelo-engine/core";

export function renderBalls(scene) {
  for (let i = 0; i < 50; i++) {
    let ball = new Ball({
      x: Math.random() * 500 + 20,
      y: Math.random() * 400 + 20,
      r: 10,
      dx: Math.random() * 3 + 1,
      dy: Math.random() * 3 + 1,
      color: utils.randomColor()
    });
    scene.addRObj(ball);
  }
}
\`\`\`
`;

export const birdExampleCode = `
\`\`\`js
import birdImg from "../images/bird.png";
import { Frames, Animations } from "../pomelo-engine/core";
import { Bird } from "../pomelo-engine/sprite";

export function renderBird(scene) {
  let img = document.createElement("img");
  img.src = birdImg;
  img.setAttribute("id", "birdImg");
  document.getElementById("root").append(img);
  let runFrames = new Frames({
    name: "b_run",
    img: img
  });
  for (let i = 0; i < 8; i++) {
    runFrames.add(130.5 * i, 0, 130.5, 80);
  }
  let anims = new Animations();
  anims.add("run", runFrames, true);
  let bird = new Bird({});
  bird.moveTo(50, 50);
  bird.dx = 1;
  bird.setAnimSpeed(0.5);
  bird.w = bird.h = 80;
  bird.setAnims(anims, "run");
  scene.addRObj(bird);
}

\`\`\`
`;

export const sampleSpriteCode = `
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

export const exampleList = ["Sample Object", "Ball Object", "Bird Sprite"];
