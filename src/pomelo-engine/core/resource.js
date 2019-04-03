export const Resource = {
  resMapping: {},
  con: null,
  count: 0,
  index: 0,
  disable: false,

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
  },

  _loaded(desc) {
    try {
      let { text } = this._getMsgContainer();
      text.innerText = desc;
    } catch (error) {}
  },

  _loadImage(name, desc, src, config) {
    let img = new Image();
    img.onload = () => {
      this._checkLoaded(name, desc, config, img);
    };
    img.src = src;
  },

  _checkLoaded(name, desc, config, resource) {
    this.resMapping[name] = resource;
    if (config.loaded) {
      config.loaded(desc);
    } else {
      this._loaded(desc);
    }
    this.index++;
    this.loadingChild.style.width =
      (this.loading.clientWidth * this.index) / this.count + "px";
    if (this.index === this.count) {
      if (config.completed) {
        config.completed();
        setTimeout(() => {
          config.callback(this.resMapping);
        }, 1000);
      } else {
        this._completed(config);
      }
    }
  },

  _removeMsgCon() {
    if (this.con) {
      document.body.removeChild(this.con);
      this.con = null;
    }
  },

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
  },

  _loadJson(name, desc, src, config) {
    fetch(src).then(res => {
      res.json().then(json => {
        this._checkLoaded(name, desc, config, json);
      });
    });
  },

  _start() {
    let { text } = this._getMsgContainer();
    text.innerText = "Before start, we need prepare something...";
  },

  destory() {
    this.disable = true;
    this.count = 0;
    this.index = 0;
    this.resMapping = {};
    this._removeMsgCon();
  },

  load(resources, config) {
    this.disable = false;
    if (config.start) {
      config.start();
    } else {
      this._start();
    }
    this.count = resources.length;
    this.index = 0;
    resources.forEach(resource => {
      switch (resource.type) {
        case "IMAGE":
          this._loadImage(resource.name, resource.desc, resource.src, config);
          break;
        case "JSON":
          this._loadJson(resource.name, resource.desc, resource.src, config);
          break;
        default:
          break;
      }
    });
  }
};
