'use strict';

export default class Board {
  constructor(width, height) {
    this.space = new Array(width * height);
    this.width = width;
    this.height = height;
  }
  get(x, y) {
    return this.space[x + this.width * y];
  }
  set(x, y, value) {
    return (this.space[x + this.width * y] = value);
  }
  draw(ctx, w, h) {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let cell = this.get(x, y);
        if (cell.canBeSeen) {
          ctx.fillStyle = cell.val;
          ctx.fillRect(x * w, y * h, w, h);
        }
      }
    }
  }
  reset() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let cell = this.get(x, y) || {};
        cell.reset();
      }
    }
  }
}

console.log('hello from board.js');
