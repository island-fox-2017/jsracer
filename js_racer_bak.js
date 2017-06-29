"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.dice = new Dice();
    this.length = length;
    this.players = players;
  }

  print_board(){
    for (var i = 0; i <= this.players.length - 1; i++) {
      let player = this.players[i].name;
      let pos = this.players[i].position;
      console.log(this.print_line(player, pos));
    }
  }

  print_line(player, pos) {
    let board = [];
    for (var i = 0; i < this.length; i++) {
      if (i == pos) board.push(`${player}|`);
      else board.push(' |')
    }
    return board.join('');
  }

  advanced_player() {
    for (var i = 0; i <= this.players.length - 1; i++) {
      let player = this.players[i];
      if (!this.finished()) player.position += this.dice.roll();
      if (player.position >= this.length - 1) player.position = this.length - 1;
    }
  }

  finished() {
    for (var i = 0; i <= this.players.length - 1; i++) {
      if (this.players[i].position >= this.length - 1) return true;
    }
    return false;
  }

  winner() {
    for (var i = 0; i <= this.players.length - 1; i++) {
      if (this.players[i].position >= this.length - 1) return this.players[i].name;
    }
    return '?';
  }

  reset_board() {
    console.log('\x1B[2J\x1B[0f');
    // console.log("\x1B[2J");
  }

} // ----- end of JSRacer -----



export default JSRacer
