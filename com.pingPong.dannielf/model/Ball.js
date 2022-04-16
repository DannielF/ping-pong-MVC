/**
 * Create a ball object
 * @version 1.0.0
 * @since 04/16/2022
 */
class Ball {
  constructor({
    x,
    y,
    radius,
    board
  }) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed_y = 0;
    this.speed_x = 3;
    this.board = board;
    this.board.ball = this;
    this.kind = 'circle';
    this.direction = 1;
    this.bounceAngle = 0;
    this.maxBounceAngle = Math.PI / 12;
    this.speed = 3;
  }

  /**
   * width of the ball
   * @return Number
   */
  get width() {
    return this.radius * 2;
  }

  /**
   * height of the ball
   * @return Number
   */
  get height() {
    return this.radius * 2;
  }

  /**
   * Move the ball
   * Axis x and y
   */
  move() {
    this.x += (this.speed_x * this.direction);
    this.y += (this.speed_y * this.direction);
  }

  /**
   * Check if the ball hit a bar
   * @param {Object} bar 
   */
  collision(bar) {

    let relativeIntersect_y = (bar.y + (bar.height / 2)) - this.y;
    let normalizedIntersect_y = relativeIntersect_y / (bar.height / 2);

    this.bounceAngle = normalizedIntersect_y * this.maxBounceAngle;

    this.speed_y = this.speed * -Math.sin(this.bounceAngle);
    this.speed_x = this.speed * Math.cos(this.bounceAngle);

    if (this.x > (this.board.width / 2)) {
      this.direction = -1;
    }
    else {
      this.direction = 1;
    }
  }
}

export default Ball;