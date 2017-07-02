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

let myJsRacer = new JSRacer(3, 60);

sleep(1000);
myJsRacer.reset();
console.log(myJsRacer.startPos());

for(let i = 0; i<5; i++)
{
  sleep(1000);
  myJsRacer.reset();
  console.log(myJsRacer.balap());
}
