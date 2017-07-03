"use strict"

class Dice {
  constructor() {
    this.random=0;

  }
  roll() {
    this.random = Math.floor(Math.random()*6)+1;
    return this.random;
  }
}

var rollRandom = new Dice()

console.log(rollRandom.roll());

export default Dice
