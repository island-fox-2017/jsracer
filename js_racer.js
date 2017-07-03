"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.dice = new Dice();
    this.length = length;
    this.players = players;
  }

  trap() {
    let min = Math.floor(0.25 * this.length);
    let max = Math.floor(0.75 * this.length);
    for (var i = 0; i <= this.players.length - 1; i++) {
      this.players[i].trap = Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }

  print_board(){
    for (var i = 0; i <= this.players.length - 1; i++) {
      let player = this.players[i].name;
      let pos = this.players[i].position;
      let trap = this.players[i].trap;
      console.log(this.print_line(player, pos, trap));
    }
  }

  print_line(player, pos, trap) {
    let board = [];
    // for (var i = 0; i < this.length; i++) {
    //   if (i == pos) board.push(`${player}|`);
    //   else if (i == trap) board.push('#|')
    //   else board.push(' |')
    // }

    for (var i = 0; i < this.length; i++) {
      if (i == pos && i == 0) board.push(`|${player}`);
      else if (i == 0) board.push('| ');
      else if (i == pos && i == this.length - 1) board.push(`${player}|`);
      else if (i == this.length - 1) board.push(' |');
      else if (i == pos) board.push(`${player} `);
      else if (i != 0 && i < pos) board.push('■ ');
      else if (i == trap) board.push('##');
      else board.push('  ');
    }

    return board.join('');
  }

  advanced_player() {
    for (var i = 0; i <= this.players.length - 1; i++) {
      let player = this.players[i];
      if (!this.finished()) {
        if (player.position == player.trap) player.position = player.trap;
        else player.position += this.dice.roll();
      }
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
    let champ = () => {
      for (var i = 0; i <= this.players.length - 1; i++) {
        if (this.players[i].position >= this.length - 1) return this.players[i].name;
      }
      return '?';
    }

    let totalled = () => {
      let list = []
      for (var i = 0; i <= this.players.length - 1; i++) {
        if (this.players[i].position == this.players[i].trap) list.push(this.players[i].name)
      }
      return list;
    }

    return `The winner is: ${champ()}\nTotalled: ${totalled().join(', ')}`;
  }

  reset_board() {
    console.log('\x1B[2J\x1B[0f');
    // console.log("\x1B[2J");
  }

} // ----- end of JSRacer -----

export default JSRacer;
