export default `
  # Get Started
  
  1. Create Game.
  
     \`\`\`js
     import { Game } from "pomelo-engine/core";
  
     let game = new Game({ container });
     \`\`\`
  
  2. Create Scene and set background image.
  
     \`\`\`js
     import { Scene } from "pomelo-engine/core";
  
     let scene = game.sceneManager.createScene({
       name: "title",
       x: 30,
       y: 10,
       w,
       h
     });
  
     scene.setBGImg("images/bg.jpg", 0);
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
      scene.addRObj(brick);
      \`\`\`
`;
