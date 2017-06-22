"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.length = length;
    this.board = [];
    this.nowPos = [];
  }
  print_board() {
    for (let i = 0; i < this.players; i++) {
      this.board.push([]);
      this.nowPos.push([0]);
      for (let j = 0; j < this.length; j++) {
        this.board[i].push("");
        if (j === 0) this.board[i][0] = "< " + String.fromCharCode(97 + i) + " >";
      }
    }
    return this;
  }
  print_advance() {
    let initialPos = 0;
    for (let i = 0; i < this.players; i++) {
      this.board[i][initialPos] = "";
      this.board[i][this.nowPos[i]] = "";
      if (parseInt(this.nowPos[i]) + dice.roll() >= this.length - 1)
        this.nowPos[i] = this.length - 1;
      else
        this.nowPos[i] = parseInt(this.nowPos[i]) + dice.roll();
      this.board[i][this.nowPos[i]] = "< " + String.fromCharCode(97 + i) + " >"; 
    }
    return this;
  }
  menjalaniHidup() {
    //for (let z = 0; z < 300; z++) {
      //for (let i = 0; i < this.players; i++) {
        //if (this.nowPos[i] >= this.length) {
        //  console.log("selesai gan");
        //  this.finished(i);
        //  return true;
        //}
        //else {
          //console.log("hehe");
          this.print_advance();
          
      //  }
      //}
    //}
  }
  // player_advance(player) {
  //   
  // }
  winner(player) {
    console.log("Player " + this.board[player].toString().replace(/[\s,<>]/gi,'').toUpperCase() + " MENANG!!");
    return true;
  }
  finished() {
    for (let i = 0; i < this.players; i++) {
      if (this.nowPos[i] >= this.length - 1) {
        // console.log( this.board[i][this.nowPos[i]] + " = "+this.nowPos[i]);
        // this.board[i][this.nowPos[i]] = "";
        // this.nowPos[i] = this.length;
        // this.board[i][this.nowPos[i]] = "< " + String.fromCharCode(97 + i) + " >";
        // console.log( this.board[i][this.nowPos[i]] + " = "+this.nowPos[i]);
        this.winner(i);
        return true;
      }
    }
    return false;
  }
  deArrayed(arrResult) {
    let endResult = []; 
    for (let i = 0; i < this.players; i++) {
      endResult.push(arrResult[i].join('  |'));
    }
    return endResult.join('\n');
  }
  reset_board() {
    console.log("\x1B[2J\x1B[0f")
    // console.log("\x1B[2J")
  }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

let race = new JSRacer(26, 30);
let dice = new Dice();
race.print_board()
console.log(race.deArrayed(race.board));
sleep(1000);

while (race.finished() === false) {
  race.reset_board();
  race.menjalaniHidup();
  console.log(race.deArrayed(race.board));
  sleep(500);
}


export default JSRacer
