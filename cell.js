'use strict';

export default class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.value;
    this.wanttobeseen = true;
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
}

console.log('hello from cell.js');
