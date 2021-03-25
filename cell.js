'use strict';

const timeouts = [];

export default class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.value;
    this.howLucky = Math.random();
  }
  draw(ctx) {
    ctx.fillRect(this.x, this.y, canvas.width / 10, canvas.height / 10);
  }
  reset() {
    this.value = undefined;
  }
}

console.log('hello from cell.js');
