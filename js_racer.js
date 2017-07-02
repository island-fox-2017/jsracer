"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.length = length
    this.position = 0;

  }

  print_line(name, pos)// for print the track
  {
    let line = [];
    for(let i=0; i<this.length; i++)
    {
      if(i == pos)
      {
        line.push(name);
      }
      else{
        line.push("_");
      }

    }
    return line.join('|');
  }

  startPos()// untuk ngatur posisi start
  {
    this.board = [];
    for(let i = 0; i<this.players; i++)
    {

      let dadu = myDice.roll();
      let playerName = "P"+i;

      var line = this.print_line(playerName, 0);

      this.board.push(line);

    }
    return this.board;
  }

  balap()//
  {
    this.board = [];

    for(let i = 0; i<this.players; i++)
    {

      let dadu = myDice.roll();
      let playerName = "P"+i;
      //this.position += dadu;
      var line = this.print_line(playerName, (this.position+=dadu));

      this.board.push(line);

    }
    return this.board;
  }

  finish()
  {
    let winner = "";
    if(this.balap() == this.length)
    {
      
    }
  }

  winner()
  {

  }

  reset()
  {
    console.log("\x1B[2J");
  }

}


let myDice = new Dice();

export default JSRacer
