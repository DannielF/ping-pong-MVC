/**
 * Board
 * set width and height of the canvas
 * @version 1.0.0
 * @since 04/16/2022
 */
class Board {
  constructor({ width, height }) {
    this.width = width;
    this.height = height;
    this.playing = false;
    this.gameOver = false;
    this.bars = [];
    this.ball = null;
  }

  /**
   * Return the bar
   * add ball to the board
   * @return Any[]
   */
  get elements() {
    // fix garbage collection problem
    let elements = this.bars.map(bar => bar);
    elements.push(this.ball);
    return elements;
  }
}

export default Board;
