import Board from '../model/Board.js';
import BoardView from '../model/BoardView.js';
import Bar from '../model/Bar.js';
import Ball from '../model/Ball.js';

const board = new Board({ width: 800, height: 400 });
const bar = new Bar({ 
  x: 20,
  y: 100, 
  width: 40, 
  height: 100,
  board 
});
const bar_2 = new Bar({ 
  x: 740,
  y: 100, 
  width: 40,
  height: 100,
  board 
});
const canvas = document.getElementById('canvas');
const boardView = new BoardView({ canvas, board });
const ball = new Ball({ x: 400, y: 100, radius: 10, board });

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      bar.up();
    case 'ArrowDown':
      bar.down();
    case 'w':
      bar_2.up();
    case 's':
      bar_2.down();
    case ' ':
      board.playing = !board.playing;
  }
});

const main = () => {
  boardView.play();
  window.requestAnimationFrame(main);
};

window.requestAnimationFrame(main);
