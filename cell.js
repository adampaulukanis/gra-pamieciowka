'use strict';

export default class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.value;
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
}

console.log('hello from cell.js');
