import hit from '../controller/hit.js';

/**
 * Create a BoardView object
 * @version 1.0.0
 * @since 04/16/2022
 */
class BoardView {
  constructor({ canvas, board }) {
    this.canvas = canvas;
    this.canvas.width = board.width;
    this.canvas.height = board.height;
    this.board = board;
    this.context = canvas.getContext('2d');
  }

  /**
   * Erase the whole canvas
   * required at the start of each frame in an animation
   */
  clean() {
    this.context.clearRect(0, 0, this.board.width, this.board.height);
  }

  /**
   * Draw each element of the board
   */
  draw() {
    for (let i = this.board.elements.length - 1; i >= 0; i--) {
      let element = this.board.elements[i];
      this.drawElement(this.context, element);
    }
  }

  /**
   * Method to draw an element
   * Rectangle (bar), Circle (ball)
   * @param {canvas} context 
   * @param {Object} element 
   */
  drawElement(context, element) {
    switch (element.kind) {
      case 'rectangle':
        context.fillRect(element.x, element.y, element.width, element.height);
        break;
      case 'circle':
        context.beginPath();
        context.arc(element.x, element.y, element.radius, 0, 7);
        context.fill();
        context.closePath();
        break;
    }
  }

  /**
   * Check if the bar and the ball are colliding
   */
  checkCollision() {
    for (let i = this.board.bars.length - 1; i >= 0; i--) {
      let bar = this.board.bars[i];
      if (hit(bar, this.board.ball)) {
        this.board.ball.collision(bar);
      }
    }
  }

  /**
   * Keep the game running
   */
  play() {
    if (this.board.playing) {
      this.clean();
      this.draw();
      this.checkCollision();
      this.board.ball.move();
    }
    this.draw();
  }
}

export default BoardView;
