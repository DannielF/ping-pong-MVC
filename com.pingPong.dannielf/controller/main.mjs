import Board from '../model/Board.js';
import BoardView from '../model/BoardView.js';
import Bar from '../model/Bar.js';
import Ball from '../model/Ball.js';

/**
 * Instances of objects
 */
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

/**
 * Listener for the event keydown, to move the bars
 * and pause the game
 */
document.addEventListener('keydown', (event) => {
  if (event.key == "ArrowUp") {
    event.preventDefault();
    bar.up();
  }
  else if (event.key == "ArrowDown") {
    event.preventDefault();
    bar.down();
  }
  else if (event.key === "w") {
    event.preventDefault();
    bar_2.up();
  }
  else if (event.key === "s") {
    event.preventDefault();
    bar_2.down();
  }
  else if (event.key === " ") {
    event.preventDefault();
    board.playing = !board.playing;
  }
});

/**
 * main, to keep the game running
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
 */
const main = () => {
  boardView.play();
  window.requestAnimationFrame(main);
};

window.requestAnimationFrame(main);
