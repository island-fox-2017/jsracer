"use strict"

import Dice from "./dice.js"

let players = [
  { name: 'a', position: 0 },
  { name: 'b', position: 0 },
  { name: 'c', position: 0 }
];

class JSRacer {
  constructor(players, length) {
    this.players = players; //diterima dalam bentuk array
    this.panjangLintasan = length; //panjang lintasan nanti
    this.dice = new Dice(); //instance dice dari file dice.js
  }
  print_board() { //b for board
    this.reset_board();
    this.advanced_player();
    for (let i = 0; i < this.players.length; i++) {
      return this.print_line(this.players[i].name, this.players[i].position);
    }
  } //board

  print_start() { //s for start
    var jumlahPemain = this.players.length;
    for (var s = 0; s < jumlahPemain; s++) {
      return this.print_line(this.players[s].name, this.players[s].position);
    }
  } //start

  print_line(player, pos) { //l for lintasan
    let lintasan = [];
    for (let i = 0; i < this.panjangLintasan; i++) {
      if (pos === i) {
        lintasan.push(player);
      } else {
        lintasan.push(' ');
      }
    }//for-loop
    let line = lintasan.join('|');
    return line;
  } //line

  advanced_player(player) {//a for advanced_player
    for (let a = 0; a < this.players.length; a++){
      this.players[a].position = this.players[a].position + this.dice.roll();//randomize
      if (this.players[a].position >= this.panjangLintasan-1) {
        this.players[a].position = this.panjangLintasan-1;
        return false;
      }//if
    }//for 1
  }//advanced_player

  finished() {//f for finished
    for (let f = 0; f < this.players.length; f++) {
      if(this.players[f].position >= this.panjangLintasan-1) {
        this.winner(this.players[f].name);
        return true;
      }
    } return false;
  }

  winner(win) {
    console.log(`\n the winner: ${win}\n`);
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}

// //Players object
// let players = [
//   {
//     name: 'a',
//     position: 0
//   },
//   {
//     name: 'b',
//     position: 0
//   },
//   {
//     name: 'c',
//     position: 0
//   }
// ]
//
// let newRace = new JSRacer(players, 30);

// console.log(newRace.print_line());


// export default JSRacer

let newRace = new JSRacer(players, 30);

console.log(newRace.print_line(players, 30));


//Ini buat arena pertandingan dan pemain
