import { Scene } from "./scene";

export class SceneManager {
  constructor(args) {
    this.namedScenes = {};
    this.scenes = [];
    this.container = args.container;
  }

  createScene(args) {
    let sc = new Scene({ ...args, container: this.container });
    this.push(sc);
    return sc;
  }

  sortSceneIdx() {
    for (let i = 0, len = this.scenes.length; i < len; i++) {
      let sc = this.scenes[i];
      sc.holder.style.zIndex = i;
    }
  }

  push(scene) {
    if (!this.getScene(scene.name)) {
      this.scenes.push(scene);
      this.namedScenes[scene.name] = scene;
      this.sortSceneIdx();
    }
  }

  pop() {
    let sc = this.scenes.pop();
    if (sc !== null) {
      sc.clean();
      delete this.namedScenes[sc.name];
      this.sortSceneIdx();
    }
  }

  getIndex(name) {
    for (let i = 0; i < this.scenes.length; i++) {
      if (name === this.scenes[i].name) {
        return i;
      }
    }
    return null;
  }

  bringToBack(name) {
    let scenes = this.scenes;
    let index = this.getIndex(name);
    if (index !== 0) {
      let temp = scenes[0];
      scenes[0] = scenes[index];
      scenes[index] = temp;
      this.sortSceneIdx();
    }
  }

  bringToFront(name) {
    let scenes = this.scenes;
    let index = this.getIndex(name);
    if (index !== scenes.length - 1) {
      let temp = scenes[scenes.length - 1];
      scenes[scenes.length - 1] = scenes[index];
      scenes[index] = temp;
      this.sortSceneIdx();
    }
  }

  remove(name) {
    let sc = this.getScene(name);
    if (sc !== null) {
      sc.clean();
      delete this.namedScenes[name];
      //TODO remove from this.scenes
      this.sortSceneIdx();
    }
  }

  getScene(name) {
    return this.namedScenes[name];
  }

  getCurrentScene() {
    return this.scenes[this.scenes.length - 1];
  }

  clearAll() {
    for (let i = 0; i < this.scenes.length; i++) {
      this.scenes[i].clean();
    }
    this.namedScenes = {};
    this.scenes = [];
  }
}
