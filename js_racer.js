"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    if ( players > 5) this.players = 5 ;
    else this.players = players;
    this.length = length;
    this.challenger = ['A', 'B', 'C','D', 'E' ];
    this.currentPos = [ "-1", "-1", "-1", "-1", "-1"];
  }

  print_board() {
    this.advanced_player();
    for (let i = 0; i < this.players; i++) {
      console.log(this.print_line(this.challenger[i], this.currentPos[i]));
    }
  }

  print_line(player, pos) {
    let array = [];
    for (let j = 0; j <= this.length; j++) {
      if (pos == j) {
        array.push(player)
      } else {
        array.push(' ')
      }
    }
    return array.join('|')
  }

  advanced_player() {
    for (let i = 0; i < this.players; i++) {
     this.currentPos[i] =  +this.currentPos[i] + Dice.roll();
      if (this.currentPos[i] >= this.length -1) {
        this.currentPos[i] = this.length;
        break;
      }
    }
  }

  finished() {
    for (let i = 0; i < this.players; i++) {
      if (this.currentPos[i] >= this.length-1) {
        this.winner(this.challenger[i]);
        return true;
      }
    }
  }

  winner(someOne) {
    console.log(`YOU 'r the champion = ${someOne}`);
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
