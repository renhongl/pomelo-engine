export const docs = `# Documentation for Pomelo Engine

  Powered by pomelo
  
  ## Get Started
  
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

export const exampleList = ["Sample Object", "Ball Object", "Bird Sprite"];
