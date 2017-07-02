"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players=players
    this.length=length
    this.position = this.position()
    this.dice = new Dice() 
  }
  position(){
    let start = []
    for(let i=0; i<this.players.length; i++){
      start.push(0)
    }
    return start
  }

  print_board() {
    this.advanced_player()
    for(let i=0; i<this.players.length; i++){
      console.log(this.print_line(this.players[i],this.position[i]));
    }
  }
  
  print_line(player, position) {
    let line = []
    for(let i=0; i<this.length; i++){
      if(position == i){
          line.push(player)
      }else{
          line.push(' ')
        }
    }
    return line.join('|')
  }

  advanced_player() {
    for(let i=0; i<this.players.length; i++ ){
      this.position[i]=  this.position[i] + this.dice.roll()
        if(this.position[i] >= this.length-1){
            this.position[i] = this.length-1
            break
        }
    }
  }

  finished() {
    for (let i=0; i<this.players.length; i++){
      if(this.position[i] >= this.length-1){
        this.winner(this.players[i])
        return true
      }
    }
    return false
  }

  winner(pemenang) {
    console.log(`Juaranya adalah ${pemenang}`);
  }

  reset_board() {
    console.log("\x1B[2J\x1B[0f")
  }

}

export default JSRacer
