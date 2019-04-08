export class Loading {
  constructor(args) {
    this.container = null;
    this.totalLoading = 0;
    this.currentLoading = 0;
    this.disable = false;
  }

  _getMsgContainer() {
    if (this.disable) {
      return null;
    }
    if (this.con) {
      return {
        con: this.con,
        loading: this.loading,
        text: this.text
      };
    } else {
      this.con = document.createElement("div");
      this.loading = document.createElement("div");
      this.loadingChild = document.createElement("div");
      this.text = document.createElement("div");
      this.loading.setAttribute("class", "pomelo-resource-loading");
      this.loadingChild.setAttribute("class", "pomelo-resource-loading-child");
      this.text.setAttribute("class", "pomelo-resource-loading-text");
      this.con.appendChild(this.loading);
      this.loading.appendChild(this.loadingChild);
      this.con.appendChild(this.text);
      this.con.setAttribute("class", "pomelo-resource-loading-con");
      document.body.appendChild(this.con);
      return {
        con: this.con,
        loading: this.loading,
        text: this.text
      };
    }
  }

  _checkLoaded(name, desc, config, resource) {
    this.resMapping[name] = resource;
    if (config.loaded) {
      config.loaded(desc);
    } else {
      this._loaded(desc);
    }
    this.index++;
    if (this.con) {
      this.loadingChild.style.width =
        (this.loading.clientWidth * this.index) / this.count + "px";
    }
    if (this.index === this.count) {
      if (config.completed) {
        config.completed();
        setTimeout(() => {
          config.callback(this.resMapping);
        }, 500);
      } else {
        this._completed(config);
      }
    }
  }

  _removeMsgCon() {
    if (this.con) {
      document.body.removeChild(this.con);
      this.con = null;
    }
  }

  _start() {
    let { text } = this._getMsgContainer();
    text.innerText = "Before start, we need prepare something...";
  }

  _loaded(desc) {
    try {
      let { text } = this._getMsgContainer();
      text.innerText = desc;
    } catch (error) {}
  }

  _completed(config) {
    try {
      let { text } = this._getMsgContainer();
      text.innerText = "That's all, enjoy...";
    } catch (error) {}
    if (config.callback) {
      setTimeout(() => {
        this._removeMsgCon();
        config.callback(this.resMapping);
      }, 500);
    }
  }

  destory() {
    this.disable = true;
    this.count = 0;
    this.index = 0;
    this.resMapping = {};
    this._removeMsgCon();
  }
}
