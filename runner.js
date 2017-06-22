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

let play = new JSRacer(3,50);
play.reset_board();

console.log("===========================================");
console.log("============== LET'S PLAY!!! ==============");
console.log("===========================================");

sleep(200);
while (play.finished() !== true) {
  sleep(400);
  play.reset_board();
  console.log("=========================================================================================================");
  console.log("=========================================================================================================");
  play.print_board();
  console.log("=========================================================================================================");
  console.log("=========================================================================================================");
}
