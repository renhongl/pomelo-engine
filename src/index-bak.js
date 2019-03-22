import { Game } from "./pomelo-engine/core";
import "./pomelo-engine/styles.css";

import "./style.css";

import { renderBird } from "./example/birdExample";
import { renderSampleSprite } from "./example/sampleSprite";
import { renderBalls } from "./example/ballExample";
import config from "./example/config.json";
import AppBar from "./app/appBar";
import ReactDOM from "react-dom";
import React from "react";

let container = document.getElementById("example");
let w = container.offsetWidth;
let h = container.offsetHeight;
let game = new Game({ container });

let scene = game.sceneManager.createScene({
  name: "title",
  x: 30,
  y: 10,
  w,
  h
});

scene.setBGImg("images/bg.jpg", 0);

game.showFrames();
game.run(60);

getExample(0);
renderNav();

function renderNav() {
  let nav = document.getElementById("nav");
  config.forEach((item, i) => {
    let row = document.createElement("div");
    row.innerText = item;
    row.setAttribute("value", i);
    if (i === 0) {
      row.setAttribute("class", "current");
    }
    nav.appendChild(row);
    row.onclick = function(e) {
      let value = e.target.getAttribute("value");
      getExample(Number(value));
      document.querySelectorAll("#nav div").forEach(item => {
        item.setAttribute("class", "");
      });
      e.target.setAttribute("class", "current");
    };
  });
}

function getExample(index) {
  scene.clean();
  switch (index) {
    case 0:
      renderSampleSprite(scene);
      break;
    case 1:
      renderBalls(scene);
      break;
    case 2:
      renderBird(scene);
      break;
    default:
      break;
  }
}

ReactDOM.render(<AppBar />, document.getElementById("root"));
