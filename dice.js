"use strict"

class Dice {
  constructor() {
    this.dice = 0;
  }
  roll() {
    this.dice = Math.floor(Math.random() * 6 + 1);
    return this.dice;
  }
}



export default Dice
