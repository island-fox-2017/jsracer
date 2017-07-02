"use strict"

import JSRacer from "./js_racer"

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

let balapan = new JSRacer(7,25);

while (balapan.finished() !== true) {
  sleep(200);
  balapan.reset_board();
  balapan.print_board();
}
