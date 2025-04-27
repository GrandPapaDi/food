//const { off } = require("process");

// npx json-server db.json

// №87 - Методы перебора массивов
// №89 - JSON
// fetch("http://localhost:3000/menu")
//   .then((data) => data.json())
//   .then((res) => console.log(res));

window.addEventListener("DOMContentLoaded", () => {
  const calc = require("./modules/calc"),
    cards = require("./modules/cards"),
    forms = require("./modules/forms"),
    modal = require("./modules/modal"),
    slider = require("./modules/slider"),
    tabs = require("./modules/tabs"),
    timer = require("./modules/timer");

  calc();
  cards();
  forms();
  modal();
  slider();
  tabs();
  timer();
});

// import calc from "./modules/calc";
// import cards from "./modules/cards";
// import forms from "./modules/forms";
// import modal from "./modules/modal";
// import slider from "./modules/slider";
// import tabs from "./modules/tabs";
// import timer from "./modules/timer";

// window.addEventListener("DOMContentLoaded", () => {
//   calc();
//   cards();
//   forms();
//   modal();
//   slider();
//   tabs();
//   timer();
// });
