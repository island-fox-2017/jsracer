"use strict"

class Dice {
  constructor() {
    this.random = Math.floor(Math.random() * 6) + 1;
  }
  roll() {
    return this.random;
  }
}

// var dice = new Dice();
//
// console.log(dice.roll());

export default Dice


//Ini pasti buat randomnya
