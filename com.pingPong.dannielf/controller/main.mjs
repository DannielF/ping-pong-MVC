import Board from '../model/Board.js';
import BoardView from '../model/BoardView.js';
import Bar from '../model/Bar.js';

const main = () => {
  const board = new Board({ width: 800, height: 400 });
  const bar = new Bar({x:20,y:100,width:40,height:100,board});
  const canvas = document.getElementById('canvas');
  const boardView = new BoardView({ canvas, board });
  boardView.draw();
};

main();
