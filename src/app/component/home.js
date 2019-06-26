import React from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import "pomelo-engine/styles.css";
import { Game } from "pomelo-engine/core";
import { RenderObj, utils } from "pomelo-engine/core";

export class Ball extends RenderObj {
  constructor(args) {
    super(args);
    this.r = args.r || 10;
    this.color = args.color || "#000";
  }

  update() {
    let w = this.owner.w,
      h = this.owner.h;

    if (this.x < this.r || this.x > w - this.r) {
      this.dx = -this.dx;
    }
    if (this.y < this.r || this.y > h - this.r) {
      this.dy = -this.dy;
    }
    super.update();
  }

  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r - 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.stroke();
  }
}

export default class Home extends React.Component {
  componentDidMount() {
    let container = document.querySelector(".normal-content");
    let w = container.clientWidth;
    let h = container.clientHeight;
    let game = new Game({ container });
    let scene = game.sceneManager.createScene({
      name: "background",
      x: 30,
      y: 10,
      w,
      h
    });
    game.run(60);
    for (let i = 0; i < 50; i++) {
      let ball = new Ball({
        x: Math.random() * 500 + 20,
        y: Math.random() * 400 + 20,
        r: 10,
        dx: Math.random() * 3 + 1,
        dy: Math.random() * 3 + 1,
        color: utils.randomColor()
      });
      scene.addRObj(ball);
    }
  }

  render() {
    const { changePage, changeDocNumber } = this.props;
    return (
      <div className="normal-content">
        <div className="home-top">
          <h1>Pomelo Engine</h1>
          <p>A javascript library for develop 2d games.</p>
          <div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => changePage(4)}
            >
              Download
              <Icon>vertical_align_bottom</Icon>
            </Button>
            <Button
              color="primary"
              size="large"
              style={{ marginLeft: 5 }}
              onClick={() => {
                changePage(3);
                changeDocNumber("2");
              }}
            >
              Get Started >
            </Button>
          </div>
        </div>
        <div className="home-bottom">
          <div className="home-bottom-nav">
            <Icon>cloud_download</Icon>
            <h4>Installation</h4>
            <div>
              Download this library by npm, then import to your project.
            </div>
            <div>
              <code>$ npm install pomelo-engine</code>
              <br />
              <code>{`$ import { Game } from 'pomelo-engine/core'`}</code>
            </div>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => {
                changePage(3);
                changeDocNumber("1");
              }}
            >
              Read the installation docs >
            </Button>
          </div>
          <div className="home-bottom-nav">
            <Icon>book</Icon>
            <h4>Documentation</h4>
            <div>
              For pomelo engine, we have a full and clear documentation, you can
              get everything you want in this documentation.
            </div>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => {
                changePage(3);
                changeDocNumber("2");
              }}
            >
              Go to documentation >
            </Button>
          </div>
          <div className="home-bottom-nav">
            <Icon>ondemand_video</Icon>
            <h4>Demos</h4>
            <div>
              We have all kinds of demos for how to use this library, you can
              check code when you see a demo also.
            </div>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => changePage(2)}
            >
              View demos >
            </Button>
          </div>
        </div>
        <footer>Copyright &#169; pomelo</footer>
      </div>
    );
  }
}
