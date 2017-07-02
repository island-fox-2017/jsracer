"use strict"

class Dice {
  constructor() {
    this.num = 6
  }
  roll() {
    return Math.floor(Math.random()*this.num)
  }
}

let dice = new Dice()
export default Dice
