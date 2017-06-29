"use strict"

import JSRacer from "./js_racer";

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// Your code here...

let players = [
  {name: 'A', position: 0},
  {name: 'B', position: 0},
  {name: 'C', position: 0},
  {name: 'D', position: 0},
  {name: 'E', position: 0},
  {name: 'F', position: 0},
  {name: 'G', position: 0},
];

let race = new JSRacer(players, 50);

while(!race.finished()) {
  sleep(500);
  race.reset_board();
  race.print_board();
  race.advanced_player();
  console.log(`The winner is: ${race.winner()}`);
}

race.reset_board();
race.print_board();
console.log(`The winner is: ${race.winner()}`);
