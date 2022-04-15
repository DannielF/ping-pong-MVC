class Board {
  constructor({ width, height }) {
    this.width = width;
    this.height = height;
    this.playing = false;
    this.gameOver = false;
    this.bars = [];
    this.ball = null;
  }

  get elements() {
    let elements = this.bars;
    elements.push(this.ball);
    return elements;
  }
}

export default Board;