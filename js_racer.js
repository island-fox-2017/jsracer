"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this._players = players;
    this._length = length;
    this._listPlayer = [
                        { name: 'a', position: 0},
                        { name: 'b', position:0},
                        { name: 'c', position:0},
                        { name: 'd', position:0},
                        { name: 'e', position:0},
                      ];
    this._dice = dice.roll();
  }

  print_start() {
    for(let i = 0; i < this._players; i++)
    {
      let pos = 0;
      console.log(this.print_line(this._listPlayer[i].name, pos));
    }
  }

  print_board() {
    for(let i = 0; i < this._players; i++)
    {
      let pos = this.advanced_player(i);
      console.log(this.print_line(this._listPlayer[i].name, pos));
    }
    // return arr;
  }

  print_line(player, pos) {
    let track = [];
    for(let j = 0; j < this._length; j++)
    {
      if(j == pos)
      {
        track.push(player);
      }
      else {
        track.push(' ');
      }
    }
    track = track.join('|');

    return track;
  }

  advanced_player(name) {
    let random = dice.roll();
    let player = this._listPlayer[name];
    player.position += random;

    if(player.position >= this._length)
    {
      return this._length-1;
    }
    else {
      return player.position;
    }

  }

  finished() {
    for(let i = 0; i < this._players; i++)
    {
      if(this._listPlayer[i].position >= this._length)
      {
        return true;
      }
    }
  }

  winner() {
    for(let i = 0; i < this._players; i++)
    {
      if(this._listPlayer[i].position >= this._length)
      {
        return this._listPlayer[i].name;
      }
    }
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}
let dice = new Dice();
export default JSRacer
