import Board from '../model/Board.mjs';
import BoardView from '../model/BoardView.mjs';

const main = () => {
  const board = new Board({ width: 800, height: 400 });
  const canvas = document.getElementById('canvas');
  const boardView = new BoardView({ canvas, board });
};

main();
