import { FrameState } from "./sys";

export class Frames {
  constructor(args) {
    this.name = args.name;
    this.duration = args.duration || 50;
    this.frames = [];
    this.img = args.img;
  }

  //添加帧数据
  add(x, y, w, h, img, dur) {
    dur = dur || this.duration;
    img = img || this.img;
    this.frames.push([img, x, y, w, h, dur]);
  }

  //插入帧数据
  insert(index, x, y, w, h, img, dur) {
    dur = dur || this.duration;
    img = img || this.img;
    this.frames.splice(index, 0, [img, x, y, w, h, dur]);
  }

  //移出帧数据
  remove(index) {
    this.frames.splice(index, 1);
  }

  //删除所有帧
  clear() {
    this.frames = [];
  }

  //获取帧数据
  get(index) {
    return this.frames[index];
  }

  //获取总数
  getCount() {
    return this.frames.length;
  }
}

export class Animations {
  constructor(args) {
    this.anims = {};
  }

  //添加帧动画集合
  add(name, frames) {
    this.anims[name] = frames;
  }

  //删除帧动画集合
  remove(name) {
    this.anims[name] = null;
  }

  //清空帧动画集合
  clear() {
    this.anims = [];
  }

  //获取当前帧动画
  get(name) {
    return this.anims[name];
  }
}

export class FrameCtrl {
  constructor(args) {
    //默认动画处理函数
    function defProcessFrame() {
      this.fDur += FrameState.elapseTime * this.speed;
      if (this.fDur >= this.currFrames.frames[this.currFIdx][5]) {
        this.fDur = 0;
        if (this.currFIdx < this.feIdx - 1) {
          ++this.currFIdx;
        } else {
          if (this.isCycle) {
            this.currFIdx = this.fsIdx;
          }
        }
      }
    }
    this.processFrame = args.processFrame || defProcessFrame;
  }

  reset() {
    this.fsIdx = 0;
    this.feIdx = this.currFrames.getCount();
    this.currFIdx = 0;
    this.isCycle = true;
    this.fDur = 0;
    this.speed = 1;
  }

  setCurrent(name) {
    let cFrames = this.anims.get(name);
    if (this.currFrames !== cFrames) {
      let oSpeed = this.speed || 1;
      this.currFrames = cFrames;
      this.reset();
      this.speed = oSpeed;
    }
  }

  getCurrent() {
    return this.currFrames;
  }

  setAnims(animations, currAnimName) {
    this.anims = animations;
    currAnimName = currAnimName || "def";
    this.setCurrent(currAnimName);
  }

  getCurrFrameIdx() {
    return this.currFIdx;
  }

  getCurrFrame() {
    return this.currFrames.get(this.currFIdx);
  }

  getNextFrame() {
    this.processFrame();
    return this.currFrames.get(this.currFIdx);
  }
}
