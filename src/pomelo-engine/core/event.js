export class EventListener {
  constructor(args) {
    this.enabled = true;
    this.onBeforeRender = args["beforeRender"] || this.onBeforeRender;
    this.onAfterRender = args["afterRender"] || this.onAfterRender;
  }

  onBeforeRender() {
    return true;
  }

  onAfterRender() {
    return true;
  }
}
