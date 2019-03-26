export class Scene {
  static SID = 0;
  constructor(args) {
    args = args || {};
    this.name = args.name || "Unnamed_" + ++Scene.SID;
    this.x = args.x || 0;
    this.y = args.y || 0;
    this.w = args.w || 320;
    this.h = args.h || 280;
    //背景元素及其样式
    this.color = args.color || "#fff";
    this.holder = document.createElement("div");
    this.holder.setAttribute("id", `sc_${this.name}`);
    this.holder.setAttribute("class", "sc_container");
    //画布及其样式
    this.cvs = document.createElement("canvas");
    this.cvs.setAttribute("id", `cv_${this.name}`);
    this.cvs.setAttribute("class", "sc_cv");
    this.ctx = this.cvs.getContext("2d");
    this.setPos();
    this.setSize();
    this.setColor(this.color);
    this.holder.appendChild(this.cvs);
    args.container.appendChild(this.holder);
    this.listeners = [];
    this.rObjs = [];
    this.namedRobjs = {};
  }

  //设置场景位置
  setPos(x, y) {
    this.x = x || this.x;
    this.y = y || this.y;
    this.holder.style.left = this.x;
    this.holder.style.top = this.y;
  }

  //设置场景大小
  setSize(w, h) {
    this.w = w || this.w;
    this.h = h || this.h;
    this.holder.style.width = this.w;
    this.holder.style.height = this.h;
    this.cvs.setAttribute("width", this.w);
    this.cvs.setAttribute("height", this.h);
  }

  //设置场景背景颜色
  setColor(color) {
    this.color = color || "#fff";
    this.holder.style.backgroundColor = this.color;
  }

  //更新所有精灵
  update() {
    for (let i = 0; i < this.rObjs.length; i++) {
      this.rObjs[i].update();
    }
    this.removeAllCanRemove();
  }

  removeAllCanRemove() {}

  //渲染所有精灵
  render() {
    let ltns = this.listeners;
    this.clear();
    for (let i = 0, len = ltns.length; i < len; i++) {
      ltns[i].enabled && ltns[i].onBeforeRender(this);
    }
    this.renderRObj();
    for (let i = 0, len = ltns.length; i < len; i++) {
      ltns[i].enabled && ltns[i].onAfterRender(this);
    }
  }

  //渲染所有对象
  renderRObj() {
    for (let i = 0, len = this.rObjs.length; i < len; i++) {
      this.ctx.save();
      this.rObjs[i].isVisible && this.rObjs[i].render(this.ctx);
      this.ctx.restore();
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.w, this.h);
  }

  show() {
    this.holder.style.display = "block";
  }

  hide() {
    this.holder.style.display = "none";
  }

  //设置场景背景图片
  setBGImg(imgURL, pattern) {
    this.holder.style.backgroundImage = `url("${imgURL}")`;
    switch (pattern) {
      case 0:
        this.holder.style.backgroundRepeat = "no-repeat";
        this.holder.style.backgroundPosition = "center";
        break;
      case 1:
        this.holder.style.backgroundSize = `${this.w}px, ${this.h}px`;
        break;
      default:
        break;
    }
  }

  clean() {
    // this.cvs.parentNode.removeChild(this.cvs);
    // this.holder.parentNode.removeChild(this.holder);
    // this.cvs = this.holder = this.ctx = null;
    this.rObjs = [];
  }

  //将可以展示的对象添加到该场景
  addRObj(renderObj) {
    renderObj.owner = this;
    this.rObjs.push(renderObj);
    this.namedRobjs[renderObj.name] = renderObj;
  }
}
