"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.length = length;
    this.peserta = ['A', 'B', 'C','D', 'E', 'F', 'G'];
    this.posisiAwal = [ 0, 0, 0, 0, 0, 0, 0];
  }

  advanced_player() {
    for (let i = 0; i < this.players; i++) {
     this.posisiAwal[i] += Dice.roll();
      if (this.posisiAwal[i] >= this.length -1) {
        this.posisiAwal[i] = this.length;
        break;
      }
    }
  }

  print_line(player, posisi) {
    let array = [];
    for (let j = 0; j <= this.length; j++) {
      if (posisi == j) {
        array.push(player)
      } else {
        array.push(' ')
      }
    }
    return array.join('|')
  }

  print_board() {
    this.advanced_player();
    for (let i = 0; i < this.players; i++) {
      console.log(this.print_line(this.peserta[i], this.posisiAwal[i]));
    }
  }

  finished() {
    for (let i = 0; i < this.players; i++) {
      if (this.posisiAwal[i] >= this.length-1) {
        this.winner(this.peserta[i]);
        return true;
      }
    }
  }

  winner(player) {
    console.log(`\nCongratz, Player ${player}. You win!!!`);
  }

  reset_board() {
    console.log("\x1B[2J");
  }
}

export default JSRacer
