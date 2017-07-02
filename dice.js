"use strict"

class Dice {
  constructor() {
    
  }
  roll() {
    return Math.floor(Math.random() * 6 ) + 0
  }
}


let acak = new Dice();

console.log(acak.roll());

export default Dice
