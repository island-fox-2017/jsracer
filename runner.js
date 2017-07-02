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

let racer = new JSRacer(4, 40);

sleep(1000);
racer.reset_board();
racer.print_start();


while(!racer.finished())
{
    sleep(1000);
    racer.reset_board();
    racer.print_board();
}
console.log(`the winner is ${racer.winner()}`);
