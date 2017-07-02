"use strict"

class Dice {
  constructor() {
    this.num = 6
  }
  roll() {
    return Math.floor(Math.random()*this.num)
  }
}
var dice = new Dice() //composition


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

  advanced_player() {
    for(let i=0; i<this.players.length; i++ ){
      this.position[i] += this.dice.roll()
      if(this.position[i] >= this.length-1){
        this.position[i] = this.length-1
        break
      }
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
  
  print_board() {
    this.advanced_player()
    for(let i=0; i<this.players.length; i++){
      console.log(this.print_line(this.players[i],this.position[i]));
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
  
  winner(thewinner) {
    console.log(`The Winner is ${thewinner}`);
  }

  reset_board() {
    console.log("\x1B[2J\x1B[0f")
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

// Your code here...

let racer = new JSRacer(['Player-1', 'Player-2', 'Player-3', 'Player-4'], 30)
while (racer.finished() !== true) {
  sleep(1000)
  racer.reset_board()
  racer.print_board()
}
