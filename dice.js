"use strict"

class Dice {
  constructor() {
    this.random = 0;

  }
  roll() {
    this.random = Math.floor(Math.random()*6)+1;
    return this.random;// note!!! jika hanya return this (itu artinya mengembalikan object dan seluruh isinya), namu jika return this.random(itu artinya hanya mengambil nilai atau angka random yang berada dari object dice)
  }
}


let myDice = new Dice();
//console.log(myDice.roll());

export default Dice
