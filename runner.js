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
let racer = new JSRacer(['Runner-1', 'Runner-2', 'Runner-3', 'Runner-4', 'Runner-5'], 30)
while (racer.finished() !== true) {
  sleep(1000)
  racer.reset_board()
  racer.print_board()
}
