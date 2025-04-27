//const { off } = require("process");

// npx json-server db.json

// №87 - Методы перебора массивов
// №89 - JSON
// fetch("http://localhost:3000/menu")
//   .then((data) => data.json())
//   .then((res) => console.log(res));

// window.addEventListener("DOMContentLoaded", () => {
//   const calc = require("./modules/calc"),
//     cards = require("./modules/cards"),
//     forms = require("./modules/forms"),
//     modal = require("./modules/modal"),
//     slider = require("./modules/slider"),
//     tabs = require("./modules/tabs"),
//     timer = require("./modules/timer");

//   calc();
//   cards();
//   forms();
//   modal();
//   slider();
//   tabs();
//   timer();
// });

import calc from "./modules/calc";
import cards from "./modules/cards";
import forms from "./modules/forms";
import modal from "./modules/modal";
import { openModal } from "./modules/modal";
import slider from "./modules/slider";
import tabs from "./modules/tabs";
import timer from "./modules/timer";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimeId = setTimeout(() => openModal(".modal", modalTimeId), 50000);
  calc();
  cards();
  forms("form", modalTimeId);
  modal("[data-modal]", ".modal", modalTimeId);
  slider({
    container: ".offer__slider",
    prevArrow: ".offer__slider-prev",
    nextArrow: ".offer__slider-next",
    slide: ".offer__slide",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  timer(".timer", "2025-05-23");
});
