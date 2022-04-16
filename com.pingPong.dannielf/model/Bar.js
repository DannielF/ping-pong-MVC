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

  down() {
    this.y += this.speed;
  }

  up() {
    this.y -= this.speed;
  }
}

export default Bar;