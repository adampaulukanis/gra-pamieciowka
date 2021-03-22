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
}

console.log('hello from board.js');
