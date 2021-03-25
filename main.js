'use strict';

import Board from './board.js';
import Cell from './cell.js';

let counter = 0;

const board = new Board(9, 9);
window.board = board;

const canvas = document.querySelector('canvas');
let w = Math.floor(canvas.offsetWidth / board.width);
let h = Math.floor(canvas.offsetHeight / board.height);
w = Math.floor(canvas.width / board.width);
h = Math.floor(canvas.height / board.height);
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

(function init() {
  for (let y = 0; y < board.height; ++y) {
    for (let x = 0; x < board.width; ++x) {
      let cell = new Cell(x, y);
      cell.randomNumber = Math.floor(Math.random() * 100);
      board.set(x, y, cell);
      function getRandomInt(max) {
        return Math.floor(Math.random() * (max + 1));
      }
      cell.value = colorArray[getRandomInt(8)];
    }
  }
})();

function helperformouse(evt) {
  let x, y, val;
  let cell;
  [x, y] = getCursorPosition(evt);
  cell = board.get(x, y) || {}; // sometimes I see errors flooding the console
  // board.draw(ctx, w, h);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw something to show this cell is different
  ctx.fillStyle = cell.value;
  ctx.fillRect(x * w, y * h, w, h);

  // Prepare message
  val = cell.value;
  let message = `${x} x ${y} = ${val}`;
  output.textContent = message;
}

canvas.addEventListener('contextmenu', (evt) => {
  evt.preventDefault();
  output.textContent = counter++;
});

canvas.addEventListener('mousemove', (evt) => {
  helperformouse(evt);
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

//board.draw(ctx, w, h);
