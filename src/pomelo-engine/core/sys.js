export const FrameState = {
  //最大帧数
  maxFrame: 0,
  //最小帧数
  minFrame: 9999,
  //即时帧数
  currFrame: 0,
  //当前时间
  currTime: 0,
  //每帧流逝的时间
  elapseTime: 0,
  //用于统计每秒开始时间
  _sTime: 0,
  //用于统计每秒总帧数
  _sTFrame: 0,

  //启动帧状态检测器
  start() {
    this.currTime = this._sTime = new Date();
  },

  //每帧在游戏循环前调用此方法，更新和计算帧数
  update() {
    let fTime = new Date();
    if (fTime - this._sTime >= 1000) {
      this.currFrame = this._sTFrame;
      this.maxFrame =
        this.currFrame > this.maxFrame ? this.currFrame : this.maxFrame;
      this.minFrame =
        this.currFrame < this.minFrame ? this.currFrame : this.minFrame;
      this._sTFrame = 0;
      this._sTime = fTime;
    } else {
      this._sTFrame += 1;
    }
    this.elapseTime = fTime - this.currTime;
    this.currTime = fTime;
  },

  clear() {
    this.maxFrame = 0;
    this.minFrame = 9999;
    this.currFrame = 0;
    this.currTime = 0;
    this.elapseTime = 0;
    this._sTime = 0;
    this._sTFrame = 0;
  }
};

export const Key = (function() {
  let _K = {
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    N0: 48,
    N1: 49,
    N2: 50,
    N3: 51,
    N4: 52,
    N5: 53,
    N6: 54,
    N7: 55,
    N8: 56,
    N9: 57,
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
    ENTER: 13,
    SPACE: 32,
    TAB: 9,
    SHIFT: 16,
    ALT: 18,
    CTRL: 17,

    states: new Array(255),
    setEnabled(flag) {
      if (flag) {
        let st = this.states;
        this.clearKeyStates();
        document.onkeydown = e => {
          st[e.keyCode] = 1;
        };
        document.onkeyup = e => {
          st[e.keyCode] = 0;
        };
      } else {
        document.onkeydown = null;
        document.onkeyup = null;
      }
    },

    pressed(key) {
      return this.states[key];
    },

    clearKeyStates() {
      for (let i = 0; i < 255; i++) {
        this.states[i] = 0;
      }
    }
  };

  _K.setEnabled(true);
  return _K;
})();
