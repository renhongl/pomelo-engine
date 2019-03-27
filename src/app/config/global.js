export const install = `# Installation

* NPM 


  * Install pomelo-engine package from npm.

      \`$ npm install pomelo-engine --save\`
      
  * Import pomelo-engine source code to your project. 

    \`\`\`js

    import { Game } from 'pomelo-engine/core';
    
    import { Ball } from 'pomelo-engine/sprite';

    import 'pomelo-engine/styles.css';
    
    \`\`\`
  
* HTML

  * Download source code from download page.

  * Copy **pomelo-engine** folder to your library.

  * Add **script** element for your html, link to: **path/to/pomelo-engine/core/index.js**.

  * Add **script** element for your html, link to: **path/to/pomelo-engine/sprite/index.js**.
  
  * Add **style** element for your html, link to **path/to/pomelo-engine/styles.css**.
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
  4. Add Sprite

      \`\`\`js
      import { Sprite } from 'pomelo-engine/core';
      
      class Brick extends Sprite {
        render(ctx) {
          ctx.fillStyle = "blue";
          ctx.fillRect(this.x, this.y, this.w, this.h);
        }
        update() {}
      }

      let brick = new Brick({
        x: 40,
        y: 40,
        w: 200,
        h: 200
      });
      this.scene.addRObj(brick);
      \`\`\`
`;

export const coreConcept = `
# Core Concepts

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

* It has frame animation, so you can see a bird is flying, a dog is running.
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
import BaseExample from "./baseExample";

export default class Example extends BaseExample {
  render() {
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
    let bird = new Bird({ x: 50, y: 50, w: 80, h: 80, dx: 1 });
    bird.setAnimSpeed(0.5);
    bird.setAnims(anims, "run");
    this.scene.addRObj(bird);
  }
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

export const keyControl = `
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

export const exampleListDetail = [
  {
    name: "Sample Render Object",
    path: "sampleSprite",
    codeView: "sampleSpriteCode"
  },
  {
    name: "Ball Render Object",
    path: "ballExample",
    codeView: "ballCode"
  },
  {
    name: "Bird Sprite",
    path: "birdExample",
    codeView: "birdExampleCode"
  },
  {
    name: "Key Control",
    path: "keyControl",
    codeView: "keyControl"
  },
  {
    name: "Ball Game",
    path: "ballGame",
    codeView: "ballGame"
  }
];

export const ballGame = `
\`\`\`js
import { Stick } from "../pomelo-engine/sprite";
import { Sprite, Game, Key } from "../pomelo-engine/core";
import BaseExample from "./baseExample";

class Ball extends Sprite {
  constructor(args) {
    super(args);
    this.r = args.r;
    this.color = "#000";
    this.stick = args.stick;
    this.state = 0;
    this.bricks = args.bricks;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    if (this.state === 0 && Key.pressed(Key.SPACE)) {
      this.dx = -3;
      this.dy = -3;
      this.state = 1;
    }
    let w = this.owner.w,
      h = this.owner.h;

    if (this.x < this.r || this.x > w - this.r) {
      this.dx = -this.dx;
    }
    if (this.y < this.r || this.y > h - this.r) {
      this.dy = -this.dy;
    }
    this.ballHitStick();
    this.ballHitBricks();
    super.update();
  }

  ballHitStick() {
    let minX = this.stick.x;
    let maxX = this.stick.x + this.stick.w;
    let minY = this.stick.y;
    let maxY = this.stick.y + this.stick.h;
    if (this.x >= minX && this.x <= maxX && this.y >= minY && this.y <= maxY) {
      this.dy = -this.dy;
      this.dx = this.dx + this.stick.dx;
    }
  }

  ballHitBricks() {
    for (let i = 0; i < this.bricks.length; i++) {
      let minX = this.bricks[i].x;
      let maxX = this.bricks[i].x + this.bricks[i].w;
      let minY = this.bricks[i].y;
      let maxY = this.bricks[i].y + this.bricks[i].h;
      if (
        this.bricks[i].isVisible &&
        this.x >= minX &&
        this.x <= maxX &&
        this.y >= minY &&
        this.y <= maxY
      ) {
        this.dy = -this.dy;
        this.bricks[i].isVisible = false;
      }
    }
  }
}

class Brick extends Sprite {
  render(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
  update() {}
}

class BallGame extends Game {}

export default class Example extends BaseExample {
  init() {
    let w = this.container.offsetWidth;
    let h = this.container.offsetHeight;
    this.game = new BallGame({ container: this.container });
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
  render() {
    let bricks = [];
    this.brickData = [
      [1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1]
    ];
    let stick = new Stick({
      x: 100,
      y: 500,
      w: 150,
      h: 10
    });
    for (let i = 0; i < this.brickData.length; i++) {
      for (let j = 0; j < this.brickData[i].length; j++) {
        let brick = new Brick({
          x: (100 + 5) * j + 50,
          y: (30 + 5) * i + 50,
          w: 100,
          h: 30,
          position: [i, j],
          isVisible: Boolean(this.brickData[i][j])
        });
        this.scene.addRObj(brick);
        bricks.push(brick);
      }
    }
    this.ball = new Ball({
      x: 120,
      y: 495,
      r: 5,
      stick,
      bricks
    });
    this.scene.addRObj(stick);
    this.scene.addRObj(this.ball);
  }
}
\`\`\`
`;

export const docsDetail = {
  "1": {
    title: "Installation",
    content: "install",
    children: []
  },
  "2": {
    title: "Get Started",
    content: "getStarted",
    children: []
  },
  "3": {
    title: "Full Docs",
    content: "install",
    children: {
      "1": {
        title: "Core Concepts",
        content: "coreConcept",
        children: []
      },
      "2": {
        title: "Your Sprite",
        content: "ownSprit",
        children: []
      },
      "3": {
        title: "Controled Sprite",
        content: "controledSprite",
        children: []
      }
    }
  }
};

export const controledSprite = `
# Create Controled Sprite

1. Create controled sprite
    \`\`\`js
    import { Sprite, Key } from "../core";

    export class Stick extends Sprite {
      render(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();
      }

      update() {
        if (Key.pressed(Key.LEFT)) {
          this.dx = -5;
        } else if (Key.pressed(Key.RIGHT)) {
          this.dx = 5;
        } else {
          this.dx = 0;
        }
        if (this.x <= 0 && Key.pressed(Key.LEFT)) {
          this.dx = 0;
        }
        if (this.x + this.w >= this.owner.w && Key.pressed(Key.RIGHT)) {
          this.dx = 0;
        }
        super.update();
      }
    }
    \`\`\`
    
2. Add to scene

    \`\`\`js

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
    \`\`\`
`;

export const ownSprit = `
# Create Your Own Sprite


  \`\`\`js
  import { Sprite } from 'pomelo-engine/core';

  class Bird extends Sprite {
      render() {
          // Your custom render function
      }

      update() {
          // Your custom update function
      }
  }

  \`\`\`
`;
