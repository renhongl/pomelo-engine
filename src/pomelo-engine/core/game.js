import { FrameState } from "./sys";
import { SceneManager } from "./sceneManager";
import { EventListener } from "./event";

export class Game {
  //初始化游戏
  constructor(args) {
    this.paused = false;
    this.listeners = [];
    this.container = args.container;
    this.sceneManager = new SceneManager({ container: args.container });
  }

  //添加监听器
  addListener(ln) {
    this.listeners.push(ln);
  }

  //清除监听器
  clearListener() {
    this.listeners.length = 0;
  }

  //游戏主循环
  mainLoop() {
    let ltns = this.listeners;
    for (let i = 0; i < ltns.length; i++) {
      ltns[i].enabled && ltns[i].onBeforeRender();
    }
    let scene = this.sceneManager.getCurrentScene();
    if (scene) {
      scene.update();
      scene.render();
    }
    for (let i = 0; i < ltns.length; i++) {
      ltns[i].enabled && ltns[i].onAfterRender();
    }
  }

  //启动游戏
  run(fps) {
    fps = fps || 60;
    let self = this,
      spf = 1000 / fps || 0;

    //开始帧检测器
    FrameState.start();
    self.tHand = setInterval(function() {
      //更新帧数状态
      FrameState.update();
      if (!self.paused) {
        self.mainLoop();
      }
    }, spf);
  }

  //暂停游戏
  pause() {
    this.paused = true;
  }

  //停止游戏
  stop() {
    clearInterval(this.tHand);
  }

  showFrames() {
    let container = this.container;
    let maxFrameEle = document.createElement("div");
    let minFrameEle = document.createElement("div");
    let currFrameEle = document.createElement("div");
    maxFrameEle.setAttribute("class", "max-frame-ele");
    minFrameEle.setAttribute("class", "min-frame-ele");
    currFrameEle.setAttribute("class", "curr-frame-ele");
    container.appendChild(maxFrameEle);
    container.appendChild(minFrameEle);
    container.appendChild(currFrameEle);
    this.addListener(
      new EventListener({
        afterRender() {
          maxFrameEle.innerText = "最大帧数：" + FrameState.maxFrame;
          minFrameEle.innerText = "最小帧数：" + FrameState.minFrame;
          currFrameEle.innerText = "当前帧数：" + FrameState.currFrame;
        }
      })
    );
  }
}
