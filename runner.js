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

// Your code here...
let play = new JSRacer(5, 30);
play.reset_board();
// play.print_awal();
sleep(10000);

while(play.finished() === false) {
  sleep(400);
  play.reset_board();
  play.print_board();
}
