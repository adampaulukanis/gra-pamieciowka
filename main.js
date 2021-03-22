'use strict';

import Board from './board.js';
import Cell from './cell.js';

const board = new Board(10, 10);
const canvas = document.querySelector('canvas');
const w = Math.floor(canvas.offsetWidth / board.width);
const h = Math.floor(canvas.offsetHeight / board.height);
const ctx = canvas.getContext('2d');

const output = document.querySelector('output');

/* Initialize the board with random data */
let randomArray = [1, 1, 4, 5, 3, 4, 2, 3, 2];
let colorArray = {
  0: 'red',
  1: 'green',
  2: 'blue',
  3: 'yellow',
  4: 'pink',
  5: 'black',
  6: 'lime',
  7: 'purple',
  8: 'brown',
};

for (let y = 0; y < board.height; ++y) {
  for (let x = 0; x < board.width; ++x) {
    let cell = new Cell(x, y);
    board.set(x, y, cell);
    function getRandomInt(max) {
      return Math.floor(Math.random() * (max + 1));
    }
    cell.val = getRandomInt(8);
    if (Math.random() > 0.9){
      cell.jesiotr = false;
    }
  }
}
function drawBoard(board) {
  for (let y = 0; y < board.height; ++y) {
    for (let x = 0; x < board.width; ++x) {
      let cell = board.get(x, y);
      if (cell.canBeSeen) {
        ctx.fillStyle = colorArray[cell.val];
        ctx.fillRect(x * w, y * h, w, h);
      }
    }
  }
}

canvas.addEventListener('contextmenu', (evt) => {
  evt.preventDefault();
});

canvas.addEventListener('mousemove', (evt) => {
  let [x, y] = getCursorPosition(evt);
  let val = board.get(x, y).val;
  output.textContent = `${x} x ${y} = ${colorArray[val]}`;
});

function getCursorPosition(e) {
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
  return [Math.floor(x / w), Math.floor(y / h)];
}

drawBoard(board);
