"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.player = players;
    // this.line = (" | ");
    this.board = [];
    this.length = length;
    this.pos = 0;
  }

  print_line(player, pos) {
    var track = [];
    for(let i = 0; i<this.length; i++){
      // this.track.push(this.line)
      if(i == pos){
        track.push(player)
      }
      else{
        track.push("_")
      }
    }
    return track.join("|")
  }


  pemain(){
    this.board = []
    for (var i = 0; i < this.player; i++) {
     var nama = "Player"+i;
     var garis = this.print_line(nama,this.pos);
     this.pos+=dadu.roll()
     this.board.push(garis)
  }
  return this.board;
}


reset_board() {
  console.log("\x1B[2J")
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

// sleep(1000){
//
// }


let tampilkan = new JSRacer (3, 40)
let dadu = new Dice ()


for (var i = 0; i < 5; i++) {
  sleep(1000);
  tampilkan.reset_board();
  console.log(tampilkan.pemain());
}


//console.log(tampilkan.print_board());
// console.log(tampilkan.print_line());


export default JSRacer
