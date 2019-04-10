(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){"use strict";t.r(n),t.d(n,"exampleListDetail",function(){return a}),t.d(n,"docsDetail",function(){return i});var a=[{name:"Render a Object",path:"sampleSprite",codeView:"exa-sampleSpriteCode"},{name:"Render and Update Object",path:"ballExample",codeView:"exa-ballGame"},{name:"Frame Animation",path:"birdExample",codeView:"exa-birdExampleCode"},{name:"Key Control",path:"keyControl",codeView:"exa-keyControl",desc:"Press LEFT or Right key to move it."},{name:"Resource Loading and Multiple Scene Switch",path:"customizeLoading",codeView:"exa-customizeLoading"},{name:"Ball Game",path:"ballGame",codeView:"exa-ballGame",desc:"Press space key to start game."}],i={1:{title:"Installation",content:"doc-install",children:[]},2:{title:"Get Started",content:"doc-getStart",children:[]},3:{title:"Full Docs",content:"install",children:{1:{title:"Core Concepts",content:"doc-coreConcept",children:[]},2:{title:"Game",content:"doc-game",children:[]},3:{title:"Scene",content:"doc-scene",children:[]}}}}},118:function(e,n,t){"use strict";(function(e){var a=t(18),i=t(19),s=t(21),r=t(20),o=t(22),l=t(0),c=t.n(l),h=t(42),d=t(43),m=t.n(d),u=t(33),p=t.n(u),g=t(34),f=t.n(g),b=t(121),x=t.n(b),y=t(119),w=t.n(y),k=t(120),E=t.n(k),j=t(10),v=function(n){function t(){var n,i;Object(a.a)(this,t);for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return(i=Object(s.a)(this,(n=Object(r.a)(t)).call.apply(n,[this].concat(l)))).state={open:!0},i.handleClick=function(){i.setState(function(e){return{open:!e.open}})},i.getDocNumber=function(e){i.props.changeDocNumber(e.currentTarget.getAttribute("value"))},i.getTitle=function(n){return 1===(n=n.split("-")).length?e[e.docsDetail[n[0]].title]:e[e.docsDetail[n[0]].children[n[1]].title]},i}return Object(o.a)(t,n),Object(i.a)(t,[{key:"render",value:function(){var e=this,n=this.props,t=n.classes,a=n.docNumber;return c.a.createElement(m.a,{component:"nav",className:t.root},Object.keys(j.docsDetail).map(function(n,i){return 0===j.docsDetail[n].children.length?c.a.createElement(p.a,{selected:n===a,button:!0,key:i,value:n,onClick:e.getDocNumber},c.a.createElement(f.a,{primary:j.docsDetail[n].title})):c.a.createElement(c.a.Fragment,{key:i},c.a.createElement(p.a,{button:!0,onClick:e.handleClick,value:n},c.a.createElement(f.a,{primary:j.docsDetail[n].title}),e.state.open?c.a.createElement(w.a,null):c.a.createElement(E.a,null)),c.a.createElement(x.a,{in:e.state.open,timeout:"auto",unmountOnExit:!0},c.a.createElement(m.a,{component:"div",disablePadding:!0},Object.keys(j.docsDetail[n].children).map(function(i,s){return c.a.createElement(p.a,{selected:n+"-"+i===a,button:!0,key:s,className:t.nested,value:n+"-"+i,onClick:e.getDocNumber},c.a.createElement(f.a,{primary:j.docsDetail[n].children[i].title}))}))))}))}}]),t}(c.a.Component);n.a=Object(h.withStyles)(function(e){return{root:{width:"200px",maxWidth:200,backgroundColor:e.palette.background.paper,position:"fixed",left:"20px",top:"80px"},nested:{paddingLeft:4*e.spacing.unit}}})(v)}).call(this,t(29))},123:function(e,n,t){e.exports=t(520)},128:function(e,n,t){},371:function(e,n,t){"use strict";t.r(n),n.default="\n# Core Concepts\n\n## Game\n* Game containes the whole thing about game.\n\n## Scene\n\n* One story will has one scene.\n\n* Containes one seperate story.\n\n## RenderObj\n* It is a object.\n\n* Including render and update function.\n\n* So it can render on the scene.\n\n## Sprite\n* It is implement from **RenderObj**.\n\n* It has frame animation, so you can see a bird is flying, a dog is running.\n"},372:function(e,n,t){"use strict";t.r(n),n.default="\n# Game API\n\nThe API documentation of Game class, Learn more about the properties\nand functions points.\n\n\n## Properties\n\n| Name | Type| Default | Description|\n|:-|:-|:-|-:|\n| container|DOM|null|Game container|\n|paused| Boolean|false|If the game already paused|\n|listeners|Array&lt;Event&gt;|[]|Game listeners|\n|sceneManager|SceneManager|{}|Scene manager|\n\n\n## Methods\n\n|Name|Return|Description|\n|:-|:-|-:|\n| addListener(&lt;Event&gt; event) |null|Add event listener to game|\n|clearListener()|null|Clear all event listeners for game|\n|mainLoop()| null|Game main loop for render game things|\n|run(&lt;Number&gt; fps)|Number|Run game with gave fps|\n|pause()|null|Pause game|\n|stop()|null|Stop game|\n|showFrames()|null|Add listener for game, render the frame status on game container|\n"},373:function(e,n,t){"use strict";t.r(n),n.default='\n  # Get Started\n  \n  1. Create Game.\n  \n     ```js\n     import { Game } from "pomelo-engine/core";\n  \n     let game = new Game({ container });\n     ```\n  \n  2. Create Scene and set background image.\n  \n     ```js\n     import { Scene } from "pomelo-engine/core";\n  \n     let scene = game.sceneManager.createScene({\n       name: "title",\n       x: 30,\n       y: 10,\n       w,\n       h\n     });\n  \n     scene.setBGImg("images/bg.jpg", 0);\n     ```\n  \n  3. Run Game\n  \n     ```js\n     //Show frame state on game screen\n     game.showFrames();\n     //Run game with 60 fps.\n     game.run(60);\n     ```\n  4. Add Sprite\n\n      ```js\n      import { Sprite } from \'pomelo-engine/core\';\n      \n      class Brick extends Sprite {\n        render(ctx) {\n          ctx.fillStyle = "blue";\n          ctx.fillRect(this.x, this.y, this.w, this.h);\n        }\n        update() {}\n      }\n\n      let brick = new Brick({\n        x: 40,\n        y: 40,\n        w: 200,\n        h: 200\n      });\n      scene.addRObj(brick);\n      ```\n'},374:function(e,n,t){"use strict";t.r(n),n.default="# Installation\n\n* NPM \n\n\n  * Install pomelo-engine package from npm.\n\n      `$ npm install pomelo-engine --save`\n      \n  * Import pomelo-engine source code to your project. \n\n    ```js\n\n    import { Game } from 'pomelo-engine/core';\n    \n    import { Ball } from 'pomelo-engine/sprite';\n\n    import 'pomelo-engine/styles.css';\n    \n    ```\n  \n* HTML\n\n  * Download source code from download page.\n\n  * Copy **pomelo-engine** folder to your library.\n\n  * Add **script** element for your html, link to: **path/to/pomelo-engine/core/index.js**.\n\n  * Add **script** element for your html, link to: **path/to/pomelo-engine/sprite/index.js**.\n  \n  * Add **style** element for your html, link to **path/to/pomelo-engine/styles.css**.\n"},375:function(e,n,t){"use strict";t.r(n),n.default="\n# Scene\n\nThe API documentation of Scene class, Learn more about the properties\nand methods points.\n\n## Properties\n\n|Name|Type|Default|Description|\n|:-|:-|:-|-:|\n|name|String|Unnamed_Scene.SID|The name of this scens|\n|x|Number|0|The x coordinate of this scene|\n|y|Number|0|The y coordinate of this scene|\n|w|Number|0|The width value of this scene|\n|h|Number|0|The height value of this scene|\n|color|String|#fff|The default color of this scene|\n|holder|DOM|null|Scene background element|\n|cvs|Canvas Element||The canvas of this scene|\n|ctx|Object||The context of this scens|\n|listeners|Array&lt;Event&gt;|[]|The event listeners of this scene|\n|rObjs|Array&lt;RenderObj&gt;|[]|The render objects of this scene|\n|namedObjs|Object|{}|The named render objects of this scene|\n\n## Methods\n\n|Name|Return|Description|\n|:-|:-|:-|-:|\n|setPos(Number x, Number y)|null|Set the position of this scene|\n|setSize(Number w, Number y)|null|Set the size of this scene|\n|setColor(String color)|null|Set the color of this scene|\n|update()|null|Update all render object for this scene|\n|removeAllCanRemove()|||\n|render()|null|Render all render object for this scene|\n|renderRObj()|null|The detail about how to render render object|\n|clear()|null|Clear this scene|\n|show()|null|Show this scene|\n|hide()|null|Hide this scene|\n|setBGImg(String url, Number model)|null|Set background image for this scene|\n|clean()|null|Clean this scene|\n|addRObj(RenderObj renderObj)|null|Add render object to this scene|\n"},376:function(e,n,t){"use strict";t.r(n),n.default='\n```js\nimport { utils, RenderObj, Game } from "../pomelo-engine/core";\nimport BaseExample from "./baseExample";\n\nexport default class BaseExample {\n  constructor(container) {\n    this.container = container;\n  }\n\n  init() {\n    let w = this.container.offsetWidth;\n    let h = this.container.offsetHeight;\n    this.game = new Game({ container: this.container });\n    this.scene = this.game.sceneManager.createScene({\n      name: "title",\n      x: 0,\n      y: 0,\n      w,\n      h\n    });\n    this.game.showFrames();\n    this.game.run(60);\n    this.render();\n  }\n\n  render() {}\n\n  destory() {}\n\n  stopGame() {\n    this.game.stop();\n    this.game.sceneManager.clearAll();\n    this.destory();\n  }\n}\n\nexport class Ball extends RenderObj {\n  constructor(args) {\n    super(args);\n    this.r = args.r || 10;\n    this.color = args.color || "#000";\n  }\n\n  update() {\n    let w = this.owner.w,\n      h = this.owner.h;\n\n    if (this.x < this.r || this.x > w - this.r) {\n      this.dx = -this.dx;\n    }\n    if (this.y < this.r || this.y > h - this.r) {\n      this.dy = -this.dy;\n    }\n    super.update();\n  }\n\n  render(ctx) {\n    ctx.beginPath();\n    ctx.fillStyle = this.color;\n    ctx.arc(this.x, this.y, this.r - 3, 0, Math.PI * 2);\n    ctx.fill();\n    ctx.lineWidth = 2;\n    ctx.beginPath();\n    ctx.strokeStyle = "#000";\n    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);\n    ctx.stroke();\n  }\n}\n\nexport default class Example extends BaseExample {\n  render() {\n    for (let i = 0; i < 50; i++) {\n      let ball = new Ball({\n        x: Math.random() * 500 + 20,\n        y: Math.random() * 400 + 20,\n        r: 10,\n        dx: Math.random() * 3 + 1,\n        dy: Math.random() * 3 + 1,\n        color: utils.randomColor()\n      });\n      this.scene.addRObj(ball);\n    }\n  }\n}\n\n```\n'},377:function(e,n,t){"use strict";t.r(n),n.default='\n```js\nimport { Sprite, Key, Resource } from "../pomelo-engine/core";\nimport BaseExample from "./baseExample";\n\nexport class End extends Sprite {\n  render(ctx) {\n    ctx.font = "30px Arial";\n    ctx.strokeText("Game Over!", 10, 50);\n  }\n}\n\nexport class Stick extends Sprite {\n  constructor(args) {\n    super(args);\n    this.color = args.color;\n    this.speed = args.speed || 5;\n  }\n  render(ctx) {\n    ctx.beginPath();\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.x, this.y, this.w, this.h);\n    ctx.closePath();\n  }\n\n  update() {\n    if (Key.pressed(Key.LEFT)) {\n      this.dx = -this.speed;\n    } else if (Key.pressed(Key.RIGHT)) {\n      this.dx = this.speed;\n    } else {\n      this.dx = 0;\n    }\n    if (this.x <= 0 && Key.pressed(Key.LEFT)) {\n      this.dx = 0;\n    }\n    if (this.x + this.w >= this.owner.w && Key.pressed(Key.RIGHT)) {\n      this.dx = 0;\n    }\n    super.update();\n  }\n}\n\nclass Ball extends Sprite {\n  constructor(args) {\n    super(args);\n    this.r = args.r;\n    this.color = "#000";\n    this.stick = args.stick;\n    this.state = 0;\n    this.bricks = args.bricks;\n    this.game = args.game;\n  }\n\n  render(ctx) {\n    ctx.beginPath();\n    ctx.fillStyle = this.color;\n    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);\n    ctx.fill();\n  }\n\n  update() {\n    if (this.state === 0 && Key.pressed(Key.SPACE)) {\n      this.dx = -3;\n      this.dy = -3;\n      this.state = 1;\n    }\n    if (this.state === 2) {\n      return;\n    }\n    let w = this.owner.w,\n      h = this.owner.h;\n\n    if (this.x < this.r || this.x > w - this.r) {\n      this.dx = -this.dx;\n    }\n    if (this.y < this.r || this.y > h - this.r) {\n      this.dy = -this.dy;\n    }\n    this.ballHitStick();\n    this.ballHitBricks();\n    this.ballOut();\n    super.update();\n  }\n\n  ballOut() {\n    if (this.y + this.r * 2 >= this.owner.h) {\n      this.state = 2;\n      this.showOver();\n    }\n  }\n\n  showOver() {\n    let endSc = this.game.sceneManager.createScene({\n      name: "endSc",\n      x: this.game.container.clientWidth / 2 - 100,\n      y: this.game.container.clientHeight / 2 - 50,\n      w: 200,\n      h: 100\n    });\n    let end = new End({\n      name: "end"\n    });\n    endSc.addRObj(end);\n    this.game.sceneManager.bringToFront("endSc");\n  }\n\n  ballHitStick() {\n    let minX = this.stick.x;\n    let maxX = this.stick.x + this.stick.w;\n    let minY = this.stick.y;\n    let maxY = this.stick.y + this.stick.h;\n    if (this.x >= minX && this.x <= maxX && this.y >= minY && this.y <= maxY) {\n      this.dy = -this.dy;\n      this.dx = this.dx + this.stick.dx;\n    }\n  }\n\n  ballHitBricks() {\n    for (let i = 0; i < this.bricks.length; i++) {\n      let minX = this.bricks[i].x;\n      let maxX = this.bricks[i].x + this.bricks[i].w;\n      let minY = this.bricks[i].y;\n      let maxY = this.bricks[i].y + this.bricks[i].h;\n      if (\n        this.bricks[i].isVisible &&\n        this.x >= minX &&\n        this.x <= maxX &&\n        this.y >= minY &&\n        this.y <= maxY\n      ) {\n        this.dy = -this.dy;\n        this.bricks[i].isVisible = false;\n        if (this.bricks[i].value > 1) {\n          this.generateReward(this.bricks[i]);\n        }\n      }\n    }\n  }\n\n  generateReward(brick) {\n    let reward = new Reward({\n      name: `reward${brick.x + "" + brick.y}`,\n      x: brick.x,\n      y: brick.y,\n      w: brick.w,\n      h: brick.h,\n      dy: 1,\n      value: brick.value\n    });\n    this.owner.addRObj(reward);\n  }\n}\n\nclass Brick extends Sprite {\n  constructor(args) {\n    super(args);\n    this.value = args.value;\n  }\n  render(ctx) {\n    ctx.fillStyle = "#afb42b";\n    ctx.fillRect(this.x, this.y, this.w, this.h);\n  }\n  update() {\n    super.update();\n  }\n}\n\nclass Reward extends Sprite {\n  constructor(args) {\n    super(args);\n    this.color = args.color;\n    this.value = args.value;\n  }\n  render(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.x, this.y, this.w, this.h);\n    if (this.value === 2) {\n      ctx.strokeStyle = "#fff";\n      ctx.strokeText("Reward Size", this.x, this.y + this.h / 2);\n    }\n    if (this.value === 3) {\n      ctx.strokeStyle = "#fff";\n      ctx.strokeText("Reward Speed", this.x, this.y + this.h / 2);\n    }\n  }\n  update() {\n    super.update();\n  }\n}\n\nclass MyStick extends Stick {\n  constructor(args) {\n    super(args);\n    this.originW = this.w;\n    this.originSpeed = this.speed;\n  }\n  update() {\n    this.stickHitReward();\n    super.update();\n  }\n\n  resetState(status) {\n    switch (status) {\n      case 2:\n        this.w = this.originW;\n        break;\n      case 3:\n        this.speed = this.originSpeed;\n        break;\n      default:\n        break;\n    }\n  }\n\n  updateState(status) {\n    switch (status) {\n      case 2:\n        this.w = this.originW * 2;\n        setTimeout(() => {\n          this.resetState(status);\n        }, 30000);\n        break;\n      case 3:\n        this.speed = this.originSpeed * 2;\n        setTimeout(() => {\n          this.resetState(status);\n        }, 30000);\n        break;\n      default:\n        break;\n    }\n  }\n\n  stickHitReward() {\n    let rObjs = this.owner.rObjs;\n    let minX = this.x;\n    let maxX = this.x + this.w;\n    let minY = this.y;\n    let maxY = this.y + this.h;\n    for (let i = 0; i < rObjs.length; i++) {\n      if (rObjs[i].name.includes("reward")) {\n        if (\n          rObjs[i].x >= minX - rObjs[i].w &&\n          rObjs[i].x <= maxX + rObjs[i].w &&\n          rObjs[i].y + rObjs[i].h >= minY &&\n          rObjs[i].y + rObjs[i].h <= maxY\n        ) {\n          rObjs[i].isVisible = false;\n          this.updateState(rObjs[i].value);\n        }\n      }\n    }\n  }\n}\n\nexport default class Example extends BaseExample {\n  getStick() {\n    let stick = new MyStick({\n      name: "stick",\n      x: 100,\n      y: 500,\n      w: 100,\n      h: 10,\n      color: "#1976d2"\n    });\n    return stick;\n  }\n\n  getBricks(brickData) {\n    let bricks = [];\n    for (let i = 0; i < brickData.length; i++) {\n      for (let j = 0; j < brickData[i].length; j++) {\n        let brick = new Brick({\n          name: `brick${i + "" + j}`,\n          x: (80 + 1) * j + 20,\n          y: (20 + 1) * i + 20,\n          w: 80,\n          h: 20,\n          value: brickData[i][j],\n          isVisible: Boolean(brickData[i][j])\n        });\n        bricks.push(brick);\n      }\n    }\n    return bricks;\n  }\n\n  getBall(stick, bricks, game) {\n    let ball = new Ball({\n      name: "ball",\n      x: stick.x + stick.w / 2,\n      y: stick.y - 5,\n      r: 5,\n      stick,\n      bricks,\n      game\n    });\n    return ball;\n  }\n\n  render() {\n    let self = this;\n    const config = [\n      {\n        name: "brickData",\n        desc: "Render silly brickes...",\n        src: "./data/brickes.json",\n        type: "JSON"\n      }\n    ];\n    Resource.load(config, {\n      callback(resources) {\n        const { brickData } = resources;\n        self.stick = self.getStick();\n        self.bricks = self.getBricks(brickData);\n        self.ball = self.getBall(self.stick, self.bricks, self.game);\n        self.scene.addRObj(self.stick);\n        for (let i = 0; i < self.bricks.length; i++) {\n          self.scene.addRObj(self.bricks[i]);\n        }\n        self.scene.addRObj(self.ball);\n      }\n    });\n  }\n}\n\n\n```\n'},378:function(e,n,t){"use strict";t.r(n),n.default='\n```js\nimport { Frames, Animations, Resource, Sprite } from "../pomelo-engine/core";\nimport BaseExample from "./baseExample";\n\nconst config = [\n  {\n    name: "bird",\n    desc: "Need some birds...",\n    src: "./images/bird.png",\n    type: "IMAGE"\n  }\n];\n\nexport class Bird extends Sprite {\n  update() {\n    let w = this.owner.w;\n    if (this.x < 20 || this.x > w - 20) {\n      this.dx = -this.dx;\n      this.isXFlip = this.dx < 0;\n    }\n    super.update();\n  }\n}\n\nexport default class Example extends BaseExample {\n  render() {\n    let resourceMgmt = new Resource({ config, game: this.game });\n    resourceMgmt.load().then(resources => {\n      let runFrames = new Frames({\n        name: "b_run",\n        img: resources.bird\n      });\n      for (let i = 0; i < 8; i++) {\n        runFrames.add(130.5 * i, 0, 130.5, 80);\n      }\n      let anims = new Animations();\n      anims.add("run", runFrames, true);\n      let bird = new Bird({ x: 50, y: 50, w: 80, h: 80, dx: 1 });\n      bird.setAnimSpeed(0.5);\n      bird.setAnims(anims, "run");\n      this.scene.addRObj(bird);\n    });\n  }\n}\n\n\n```\n'},379:function(e,n,t){"use strict";t.r(n),n.default='\n```js\nimport {\n  Frames,\n  Animations,\n  Resource,\n  Sprite,\n  Audio,\n  Loading\n} from "../pomelo-engine/core";\nimport BaseExample from "./baseExample";\n\nconst config = [\n  {\n    name: "bird",\n    desc: "Need some birds...",\n    src: "./images/bird.png",\n    type: "IMAGE"\n  },\n  {\n    name: "world",\n    desc: "Creating awesome world...",\n    src: "./images/bg.jpg",\n    type: "IMAGE"\n  },\n  {\n    name: "json",\n    desc: "Getting nice knowloadge...",\n    src: "./data/config.json",\n    type: "JSON"\n  },\n  {\n    name: "audio",\n    desc: "Getting sound for world...",\n    src: "./media/horse.ogg",\n    type: "AUDIO"\n  }\n];\n\nexport class Bird extends Sprite {\n  update() {\n    let w = this.owner.w;\n    if (this.x < 20 || this.x > w - 20) {\n      this.dx = -this.dx;\n      this.isXFlip = this.dx < 0;\n    }\n    super.update();\n  }\n}\n\nclass LoadingContent extends Sprite {\n  constructor(args) {\n    super(args);\n    this.w = 200;\n    this.h = 20;\n    this.from = 0;\n    this.percentage = 0;\n    this.loadingSpeed = args.loadingSpeed || 10;\n  }\n\n  render(ctx) {\n    ctx.fillStyle = "green";\n    ctx.fillRect(this.x, this.y, this.from, this.h);\n    ctx.strokeStyle = "blue";\n    ctx.rect(this.x, this.y, this.w, this.h);\n    ctx.stroke();\n    ctx.strokeText(\n      Number.parseInt((this.from / this.w) * 100) + "%",\n      this.x + 80,\n      this.y - 10\n    );\n  }\n\n  update() {\n    if (this.from < this.w * this.percentage) {\n      this.from += this.loadingSpeed;\n    }\n    super.update();\n  }\n}\n\nclass CusLoading extends Loading {\n  start(configArr) {\n    this.container = this.game.container;\n    this.sceneName = "loadingSc";\n    this.scene = this.game.sceneManager.createScene({\n      name: this.sceneName,\n      x: 0,\n      y: 0,\n      w: this.container.clientWidth,\n      h: this.container.clientHeight\n    });\n    this.loadingContent = new LoadingContent({\n      x: this.container.clientWidth / 2 - 100,\n      y: this.container.clientHeight / 2 - 10\n    });\n    this.scene.addRObj(this.loadingContent);\n    this.game.sceneManager.bringToFront(this.sceneName);\n  }\n\n  loaded(config, source, percentage) {\n    this.loadingContent.percentage = percentage;\n  }\n\n  completed(resources) {\n    this.game.sceneManager.bringToBack(this.sceneName);\n  }\n}\n\nexport default class Example extends BaseExample {\n  render() {\n    let cusLoading = new CusLoading();\n    let resourceMgmt = new Resource({\n      config,\n      game: this.game,\n      loading: cusLoading\n    });\n    resourceMgmt.load().then(resources => {\n      this.scene.setBGImg(resources.world, 1);\n      let runFrames = new Frames({\n        name: "b_run",\n        img: resources.bird\n      });\n      for (let i = 0; i < 8; i++) {\n        runFrames.add(130.5 * i, 0, 130.5, 80);\n      }\n      let anims = new Animations();\n      anims.add("run", runFrames, true);\n      let bird = new Bird({ x: 50, y: 50, w: 80, h: 80, dx: 1 });\n      bird.setAnimSpeed(0.5);\n      bird.setAnims(anims, "run");\n      this.scene.addRObj(bird);\n      Audio.play(resources.audio);\n    });\n  }\n}\n\n\n\n```\n'},380:function(e,n,t){"use strict";t.r(n),n.default='\n```js\nimport { Game, Key, Sprite } from "../pomelo-engine/core";\nimport BaseExample from "./baseExample";\n\nexport default class BaseExample {\n  constructor(container) {\n    this.container = container;\n  }\n\n  init() {\n    let w = this.container.offsetWidth;\n    let h = this.container.offsetHeight;\n    this.game = new Game({ container: this.container });\n    this.scene = this.game.sceneManager.createScene({\n      name: "title",\n      x: 0,\n      y: 0,\n      w,\n      h\n    });\n    this.game.showFrames();\n    this.game.run(60);\n    this.render();\n  }\n\n  render() {}\n\n  destory() {}\n\n  stopGame() {\n    this.game.stop();\n    this.game.sceneManager.clearAll();\n    this.destory();\n  }\n}\n\nexport class Stick extends Sprite {\n  constructor(args) {\n    super(args);\n    this.color = args.color;\n    this.speed = args.speed || 5;\n  }\n  render(ctx) {\n    ctx.beginPath();\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.x, this.y, this.w, this.h);\n    ctx.closePath();\n  }\n\n  update() {\n    if (Key.pressed(Key.LEFT)) {\n      this.dx = -this.speed;\n    } else if (Key.pressed(Key.RIGHT)) {\n      this.dx = this.speed;\n    } else {\n      this.dx = 0;\n    }\n    if (this.x <= 0 && Key.pressed(Key.LEFT)) {\n      this.dx = 0;\n    }\n    if (this.x + this.w >= this.owner.w && Key.pressed(Key.RIGHT)) {\n      this.dx = 0;\n    }\n    super.update();\n  }\n}\n\nexport default class Example extends BaseExample {\n  render() {\n    let stick = new Stick({\n      x: 100,\n      y: 200,\n      w: 50,\n      h: 10,\n      color: "#1976d2"\n    });\n    this.scene.addRObj(stick);\n  }\n}\n\n```\n'},381:function(e,n,t){"use strict";t.r(n),n.default='\n```js\nimport BaseExample from "./baseExample";\nimport { Game, RenderObj } from "../pomelo-engine/core";\n\nexport default class BaseExample {\n  constructor(container) {\n    this.container = container;\n  }\n\n  init() {\n    let w = this.container.offsetWidth;\n    let h = this.container.offsetHeight;\n    this.game = new Game({ container: this.container });\n    this.scene = this.game.sceneManager.createScene({\n      name: "title",\n      x: 0,\n      y: 0,\n      w,\n      h\n    });\n    this.game.showFrames();\n    this.game.run(60);\n    this.render();\n  }\n\n  render() {}\n\n  destory() {}\n\n  stopGame() {\n    this.game.stop();\n    this.game.sceneManager.clearAll();\n    this.destory();\n  }\n}\n\nexport class SampleSprite extends RenderObj {\n  render(ctx) {\n    ctx.fillStyle = "#1976d2";\n    ctx.fillRect(this.x, this.y, this.w, this.h);\n  }\n}\n\nexport default class Example extends BaseExample {\n  render() {\n    let sampleSprite = new SampleSprite({\n      w: 200,\n      h: 200\n    });\n    this.scene.addRObj(sampleSprite);\n    sampleSprite.moveTo(\n      sampleSprite.owner.w / 2 - sampleSprite.w / 2,\n      sampleSprite.owner.h / 2 - sampleSprite.h / 2\n    );\n  }\n}\n```\n'},518:function(e,n,t){var a={"./ballExample.js":[522,3],"./ballGame.js":[523,4],"./baseExample.js":[521,9],"./birdExample.js":[524,5],"./customizeLoading.js":[525,6],"./defaultLoading.js":[526,10],"./keyControl.js":[527,7],"./sampleSprite.js":[528,8]};function i(e){var n=a[e];return n?t.e(n[1]).then(function(){var e=n[0];return t(e)}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}i.keys=function(){return Object.keys(a)},i.id=518,e.exports=i},520:function(e,n,t){"use strict";t.r(n);var a=t(24),i=t.n(a),s=t(0),r=t.n(s),o=(t(69),t(18)),l=t(19),c=t(21),h=t(20),d=t(22),m=t(44),u=t(42),p=t(122),g=t.n(p),f=t(26),b=(t(128),t(10)),x=t(106),y=t.n(x),w=t(104),k=t.n(w),E=t(33),j=t.n(E),v=t(34),S=t.n(v),O=t(43),C=t.n(O),N=t(17),D=t.n(N),R=t(107),L=t.n(R),G=t(28),T=t.n(G),B=t(67),M=t.n(B),A=t(103),P=t.n(A),I=(t(370),new P.a({html:!0,linkify:!0,typographer:!0,highlight:function(e,n){if(n&&M.a.getLanguage(n))try{return'<pre class="hljs"><code>'+M.a.highlight(n,e,!0).value+"</code></pre>"}catch(t){}return'<pre class="hljs"><code>'+I.utils.escapeHtml(e)+"</code></pre>"}})),F=function(e){function n(){return Object(o.a)(this,n),Object(c.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.content,n=I.render(e);return r.a.createElement("div",{id:"content",dangerouslySetInnerHTML:{__html:n}})}}]),n}(r.a.Component),K=t(108),z=t.n(K),H=t(55),V=t.n(H),W=t(109),X=t.n(W),_=t(54),U=t.n(_),Y=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(i)))).state={showCode:!1,openSnack:!0},t.toggleCodeView=function(e){t.setState({anchorEl:e.currentTarget},function(){t.setState({showCode:!t.state.showCode})})},t.handleClose=function(){t.setState({openSnack:!1})},t.openSnack=function(){t.setState({openSnack:!0})},t.handlePopoverClose=function(){t.setState({showCode:!t.state.showCode})},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"getCodeView",value:function(){var e=this.props.selected;try{var n=b.exampleListDetail[e].codeView,a=t(78)("./".concat(n,".js"));return r.a.createElement(F,{content:a.default})}catch(i){return null}}},{key:"componentDidMount",value:function(){this.props.onNavClick(this.props.selected)}},{key:"render",value:function(){var e=this,n=this.props,t=n.classes,a=n.selected,i=n.onNavClick,s=n.exampleList,o=n.changePage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{className:"example-drawer",variant:"permanent",classes:{paper:t.drawerPaper},anchor:"left"},r.a.createElement("div",{className:"example-page-header"},r.a.createElement(D.a,{color:"primary",onClick:function(){return o(1)},style:{fontSize:20}},"Pomelo Engine")),r.a.createElement(y.a,null),r.a.createElement(C.a,null,s.map(function(n,t){return r.a.createElement(j.a,{button:!0,key:n.name,selected:a===t,onClick:function(){e.handleClose(),i(t),e.openSnack()}},r.a.createElement(S.a,{primary:n.name}))}))),r.a.createElement("div",{className:"example-content"},r.a.createElement("div",{className:"default-example-view"},r.a.createElement("img",{src:"./images/loading.gif",alt:"loading..."}))),this.state.showCode?r.a.createElement(U.a,{id:"simple-popper",anchorEl:this.state.anchorEl,open:this.state.showCode,onClose:this.handlePopoverClose,className:"code-view-popper",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"}},r.a.createElement("h4",null,"Example Resouce Code"),this.getCodeView()):null,this.getCodeView()?r.a.createElement(L.a,{color:"primary","aria-label":"Add",className:"code-view-btn",onClick:this.toggleCodeView},r.a.createElement(T.a,null,"code")):null,r.a.createElement(z.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},onClose:this.handleClose,open:b.exampleListDetail&&b.exampleListDetail[a]&&b.exampleListDetail[a].desc&&this.state.openSnack,message:b.exampleListDetail&&b.exampleListDetail[a]&&b.exampleListDetail[a].desc||"",action:[r.a.createElement(V.a,{key:"close","aria-label":"Close",color:"inherit",className:t.close,onClick:this.handleClose},r.a.createElement(X.a,null))]}))}}]),n}(r.a.Component),J=t(110),$=t.n(J),q=t(114),Q=t.n(q),Z=t(27),ee=t.n(Z),ne=t(116),te=t.n(ne),ae=t(117),ie=t.n(ae),se=t(111),re=t.n(se),oe=t(113),le=t.n(oe),ce=t(112),he=t.n(ce),de=t(115),me=t.n(de),ue=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(i)))).state={anchorEl:null,open:!1},t.handleClose=function(e){t.setState({open:!1})},t.handleOpen=function(e){t.setState({open:!0})},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({anchorEl:document.querySelector(".header-search input")})}},{key:"componentWillReceiveProps",value:function(e){0!==e.searchResult.length&&JSON.stringify(e.searchResult)!==JSON.stringify(this.props.searchResult)&&this.setState({open:!0})}},{key:"render",value:function(){var e=this,n=this.state,t=n.anchorEl,a=n.open,i=this.props,s=i.classes,o=i.changePage,l=i.page,c=i.title,h=i.filter,d=i.updateFilter,m=i.searchResult,u=i.onNavClick,p=i.changeDocNumber;return r.a.createElement($.a,{position:"fixed",className:"example"===l?"example-header":"normal-header"},r.a.createElement(U.a,{id:"simple-popper",open:a,anchorEl:t,onClose:this.handleClose,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement("div",{style:{width:"300px",height:"400px",padding:10}},m.map(function(n,t){return r.a.createElement(re.a,{key:t,className:s.card,style:{marginTop:10}},r.a.createElement(he.a,null,r.a.createElement(ee.a,{variant:"h6",component:"h6"},n.name||n.title),r.a.createElement(ee.a,{className:s.pos,color:"textSecondary"},n.type),r.a.createElement(ee.a,{component:"p"},n.desc)),r.a.createElement(le.a,null,r.a.createElement(D.a,{size:"small",onClick:function(t){"Example"===n.type?(o(2),e.handleClose(),u(n.index)):(o(3),e.handleClose(),p(n.index))}},"Read More")))}))),r.a.createElement(Q.a,null,r.a.createElement(ee.a,{variant:"h6",color:"inherit",noWrap:!0},"example"!==l?r.a.createElement(D.a,{color:"inherit",onClick:function(){return o(1)},style:{fontSize:20}},"Pomelo Engine"):c),r.a.createElement(V.a,{color:"inherit","aria-label":"Open drawer",className:"example-header-menu"},r.a.createElement(me.a,null)),r.a.createElement("div",{className:s.grow}),r.a.createElement("div",{className:s.search},r.a.createElement("div",{className:s.searchIcon},r.a.createElement(te.a,null)),r.a.createElement(ie.a,{placeholder:"Search\u2026",value:h,onChange:function(n){d(n),e.handleClose()},className:"header-search",classes:{root:s.inputRoot,input:s.inputInput}})),r.a.createElement(D.a,{color:"inherit",onClick:function(e){"example"===l?(e.stopPropagation(),e.preventDefault()):o(2)},style:{marginLeft:"5px"}},"Demos"),r.a.createElement(D.a,{color:"inherit",onClick:function(){return o(3)}},"Docs"),r.a.createElement(D.a,{color:"inherit",onClick:function(){return o(4)}},"Github")))}}]),n}(r.a.Component),pe=function(e){function n(){return Object(o.a)(this,n),Object(c.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.changePage,t=e.changeDocNumber;return r.a.createElement("div",{className:"normal-content"},r.a.createElement("div",{className:"home-top"},r.a.createElement("h1",null,"Pomelo Engine"),r.a.createElement("p",null,"A javascript library for develop 2d games."),r.a.createElement("div",null,r.a.createElement(D.a,{variant:"contained",color:"primary",size:"large",onClick:function(){return n(4)}},"Download",r.a.createElement(T.a,null,"vertical_align_bottom")),r.a.createElement(D.a,{color:"primary",size:"large",style:{marginLeft:5},onClick:function(){n(3),t("2")}},"Get Started >"))),r.a.createElement("div",{className:"home-bottom"},r.a.createElement("div",{className:"home-bottom-nav"},r.a.createElement(T.a,null,"cloud_download"),r.a.createElement("h4",null,"Installation"),r.a.createElement("div",null,"Download this library by npm, then import to your project."),r.a.createElement("div",null,r.a.createElement("code",null,"$ npm install pomelo-engine"),r.a.createElement("br",null),r.a.createElement("code",null,"$ import { Game } from 'pomelo-engine/core'")),r.a.createElement(D.a,{variant:"outlined",color:"primary",size:"large",onClick:function(){n(3),t("1")}},"Read the installation docs >")),r.a.createElement("div",{className:"home-bottom-nav"},r.a.createElement(T.a,null,"book"),r.a.createElement("h4",null,"Documentation"),r.a.createElement("div",null,"For pomelo engine, we have a full and clear documentation, you can get everything you want in this documentation."),r.a.createElement(D.a,{variant:"outlined",color:"primary",size:"large",onClick:function(){n(3),t("2")}},"Go to documentation >")),r.a.createElement("div",{className:"home-bottom-nav"},r.a.createElement(T.a,null,"ondemand_video"),r.a.createElement("h4",null,"Demos"),r.a.createElement("div",null,"We have all kinds of demos for how to use this library, you can check code when you see a demo also."),r.a.createElement(D.a,{variant:"outlined",color:"primary",size:"large",onClick:function(){return n(2)}},"View demos >"))),r.a.createElement("footer",null,"Copyright \xa9 pomelo"))}}]),n}(r.a.Component),ge=t(118),fe=function(e){function n(){return Object(o.a)(this,n),Object(c.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"getDoc",value:function(){var e,n=this.props.docNumber.split("-"),a="";return a=1===n.length?b.docsDetail[n[0]].content:b.docsDetail[n[0]].children[n[1]].content,e=t(78)("./".concat(a,".js")),r.a.createElement(F,{content:e.default})}},{key:"render",value:function(){var e=this.props,n=e.changeDocNumber,t=e.docNumber;return r.a.createElement("div",{className:"normal-content"},r.a.createElement(ge.a,{changeDocNumber:n,docNumber:t}),this.getDoc())}}]),n}(r.a.Component),be=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(i)))).state={title:"",selected:0,filter:"",page:"home",docNumber:"1",searchResult:[]},t.onNavClick=function(e){t.getExample(Number(e)),t.setState({title:b.exampleListDetail[e].name,selected:e})},t.updateFilter=function(e){t.setState({filter:e.target.value}),""!==e.target.value&&(clearTimeout(t.searchTimer),t.searchTimer=setTimeout(function(){t.updateResult()},1e3))},t.changeDocNumber=function(e){t.setState({docNumber:e})},t.changePage=function(e){switch(t.setState({selected:0}),e){case 1:t.setState({page:"home"});break;case 2:t.setState({page:"example"},function(){t.container=document.querySelector(".example-content")});break;case 3:t.setState({page:"document"});break;case 4:window.location="https://github.com/renhongl/pomelo-engine"}},t.updateResult=function(){b.exampleListDetail.forEach(function(e,n){e.index=n,e.type="Example"});var e=b.exampleListDetail.filter(function(e){return e.name.toUpperCase().includes(t.state.filter.toUpperCase())});t.searchDoc(b.docsDetail,e),console.log(e),t.setState({searchResult:e})},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"getExample",value:function(e){var n=this;this.e&&this.e.stopGame();var a=b.exampleListDetail[e].path;t(518)("./".concat(a,".js")).then(function(e){n.e=new e.default(n.container),n.e.init()})}},{key:"searchDoc",value:function(e,n,t){var a=this;Object.keys(e).forEach(function(i){e[i].index=t?t+"-"+i:i,e[i].type="Document",e[i].title.toUpperCase().includes(a.state.filter.toUpperCase())&&n.push(e[i]),Object.keys(e[i].children).length>0&&a.searchDoc(e[i].children,n,i)})}},{key:"render",value:function(){var e=this.props.classes,n=this.state,t=n.title,a=n.selected,i=n.filter,s=n.page,o=n.docNumber,l=n.searchResult;return r.a.createElement("div",{className:"drawer-content"},r.a.createElement(g.a,null),r.a.createElement(ue,{title:t,selected:a,filter:i,page:s,classes:e,updateFilter:this.updateFilter,changePage:this.changePage,searchResult:l,onNavClick:this.onNavClick,changeDocNumber:this.changeDocNumber}),"example"===s?r.a.createElement(Y,{selected:a,onNavClick:this.onNavClick,filter:i,classes:e,exampleList:b.exampleListDetail,changePage:this.changePage}):"home"===s?r.a.createElement(pe,{changePage:this.changePage,changeDocNumber:this.changeDocNumber}):r.a.createElement(fe,{docNumber:o,changeDocNumber:this.changeDocNumber}))}}]),n}(r.a.Component),xe=Object(u.withStyles)(function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:3*e.spacing.unit},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(m.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(m.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(f.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(f.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(m.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}}),titleName:{paddingLeft:"20px",color:"#404040"}}})(be);i.a.render(r.a.createElement(xe,null),document.getElementById("root"))},69:function(e,n,t){},78:function(e,n,t){var a={"./doc-coreConcept.js":371,"./doc-game.js":372,"./doc-getStart.js":373,"./doc-install.js":374,"./doc-scene.js":375,"./exa-ballCode.js":376,"./exa-ballGame.js":377,"./exa-birdExampleCode.js":378,"./exa-customizeLoading.js":379,"./exa-keyControl.js":380,"./exa-sampleSpriteCode.js":381,"./global.js":10};function i(e){var n=s(e);return t(n)}function s(e){var n=a[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}i.keys=function(){return Object.keys(a)},i.resolve=s,e.exports=i,i.id=78}},[[123,1,2]]]);
//# sourceMappingURL=main.26c471b8.chunk.js.map