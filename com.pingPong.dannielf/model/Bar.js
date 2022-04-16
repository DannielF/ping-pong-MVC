/**
 * Create a bar object
 * @version 1.0.0
 * @since 04/16/2022
 */
class Bar {
  constructor({
    x,
    y,
    width,
    height,
    board
  }){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.board = board;
    this.board.bars.push(this);
    this.kind = 'rectangle';
    this.speed = 5;
  }

  /**
   * Move the bar
   * Axis y
   */
  down() {
    this.y += this.speed;
  }

  /**
   * Move the bar
   * Axis y
   */
  up() {
    this.y -= this.speed;
  }
}

export default Bar;