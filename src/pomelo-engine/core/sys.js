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
