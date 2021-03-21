'use strict';

import Board from './board.js';
import Cell from './cell.js';

const board = new Board(5, 5);
const canvas = document.querySelector('canvas');
const w = Math.floor(canvas.width / board.width);
const h = Math.floor(canvas.height / board.height);
const ctx = canvas.getContext('2d');

/* Initialize the board with random data */
let randomArray = [1, 1, 4, 5, 3, 4, 2, 3, 2];
let colorArray = {
  0: 'red',
  1: 'green',
  2: 'blue',
  3: 'yellow',
  4: 'pink',
  5: 'black',
  6: 'white',
  7: 'purple',
  8: 'brown',
};

for (let y = 0; y < board.width; ++y) {
  for (let x = 0; x < board.width; ++x) {
    let cell = new Cell(x, y);
    board.set(x, y, cell);
    function getRandomInt(max) {
      return Math.floor(Math.random() * (max + 1));
    }
    cell.val = getRandomInt(8);
  }
}
for (let y = 0; y < board.width; ++y) {
  for (let x = 0; x < board.width; ++x) {
    ctx.fillStyle = colorArray[board.get(x, y).val];
    ctx.fillRect(x * w, y * h, w, h);
  }
}

canvas.addEventListener('contextmenu', (evt) => {
  evt.preventDefault();
});

canvas.addEventListener('mousemove', (evt) => {});

let getCursorPosition = (e) => {
  let x, y;
  if (e.pageX != undefined && e.pageY != undefined) {
    x = e.pageX;
    y = e.pageY;
  } else {
    x =
      e.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft;

    y =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
  return { x, y };
};
