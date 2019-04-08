export class Loading {
  constructor(args) {
    this.game = args && args.game;
  }

  start(configArr) {
    console.log("Starting Loading...");
  }

  loaded(config, source, percentage) {
    console.log(`Loading ${config.name}...`);
  }

  completed(resources) {
    console.log("Completed Loading...");
  }
}
