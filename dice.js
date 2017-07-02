"use strict"

class Dice {
  constructor() {

  }
  static roll() {
    return Math.ceil(Math.random()*6);
  }
}
// let kocokan = new Dice();
// console.log(kocokan.roll());

export default Dice
