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
  }
}

export default Ball;