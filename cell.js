'use strict';

const timeouts = [];

export default class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.value;
    this.wanttobeseen = false;
  }
  draw(ctx) {
    ctx.fillRect(this.x, this.y, canvas.width / 10, canvas.height / 10);
  }
  set val(val) {
    this.value = val;
  }
  get val() {
    return this.value;
  }
  set jesiotr(what) {
    this.wanttobeseen = what;
  }
  get canBeSeen() {
    return this.wanttobeseen;
  }
  reset(){
    this.wanttobeseen = false;
  }
}

console.log('hello from cell.js');
