import { Loading } from "./loading";

export class Resource {
  constructor(args) {
    this.index = 0;
    this.resources = {};
    this.disable = false;
    this.configArr = args.config;
    this.count = args.config.length;
    if (args.loading) {
      args.loading.game = args.game;
    }
    this.loading = args.loading || new Loading({ game: args.game });
  }

  loadImage(src) {
    return new Promise((resolve, reject) => {
      try {
        let img = new Image();
        img.onload = () => {
          resolve(img);
        };
        img.src = src;
      } catch (error) {
        reject(error);
      }
    });
  }

  loadJson(src) {
    return new Promise((resolve, reject) => {
      try {
        fetch(src).then(res => {
          res.json().then(json => {
            resolve(json);
          });
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  loadAudio(src) {
    return new Promise((resolve, reject) => {
      try {
        fetch(src).then(res =>
          res.arrayBuffer().then(buffer => {
            resolve(buffer);
          })
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  loadedEach(resolve, config, resource) {
    this.index++;
    this.loading.loaded(config, resource, this.index / this.count);
    this.resources[config.name] = resource;
    if (this.index >= this.count) {
      setTimeout(() => {
        this.loading.completed(this.resources);
        resolve(this.resources);
      }, 500);
    }
  }

  load() {
    return new Promise((resolve, reject) => {
      try {
        this.loading.start(this.configArr);
        this.configArr.forEach(config => {
          switch (config.type) {
            case "IMAGE":
              this.loadImage(config.src).then(resource => {
                this.loadedEach(resolve, config, resource);
              });
              break;
            case "JSON":
              this.loadJson(config.src).then(resource => {
                this.loadedEach(resolve, config, resource);
              });
              break;
            case "AUDIO":
              this.loadAudio(config.src).then(resource => {
                this.loadedEach(resolve, config, resource);
              });
              break;
            default:
              break;
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}
