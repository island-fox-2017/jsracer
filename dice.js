"use strict"

class Dice {
  constructor() {
  }
  static roll() {
    return Math.floor(Math.random()*6)
  }
}

export default Dice
