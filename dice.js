"use strict"

class Dice {
  constructor() {

  }
  roll() {
    return Math.ceil(Math.random() * 5);
  }
}

export default Dice
