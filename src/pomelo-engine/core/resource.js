export const Resource = {
  resMapping: {},
  con: null,

  _getMsgContainer() {
    if (this.con) {
      return this.con;
    } else {
      this.con = document.createElement("div");
      this.con.setAttribute("class", "pomelo-resource-loading");
      document.body.appendChild(this.con);
      return this.con;
    }
  },

  _loaded(name) {
    let con = this._getMsgContainer();
    con.innerText = name;
  },

  _loadImage(name, desc, src, config) {
    let img = new Image();
    img.onload = () => {
      setTimeout(() => {
        this._checkLoaded(name, desc, config, img);
      }, 3000 + Math.random() * 20000);
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
    if (this.index === this.count) {
      if (config.completed) {
        config.completed();
        setTimeout(() => {
          this._removeMsgCon();
          config.callback(this.resMapping);
        }, 3000);
      } else {
        this._completed(config);
      }
    }
  },

  _removeMsgCon() {
    if (this.con) {
      document.body.removeChild(this.con);
    }
  },

  _completed(config) {
    let con = this._getMsgContainer();
    setTimeout(() => {
      con.innerText = "That's all, enjoy...";
      if (config.callback) {
        this._removeMsgCon();
        config.callback(this.resMapping);
      }
    }, 3000);
  },

  _loadJson(name, desc, src, config) {
    fetch(src).then(res => {
      setTimeout(() => {
        this._checkLoaded(name, desc, config, "test");
      }, 3000 + Math.random() * 20000);
    });
  },

  _start() {
    let con = this._getMsgContainer();
    con.innerText = "Before start, we need prepare something...";
  },

  load(resources, config) {
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
