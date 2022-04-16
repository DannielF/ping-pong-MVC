class BoardView {
  constructor({ canvas, board }) {
    this.canvas = canvas;
    this.canvas.width = board.width;
    this.canvas.height = board.height;
    this.board = board;
    this.context = canvas.getContext('2d');
  }

  clean() {
    this.context.clearRect(0, 0, this.board.width, this.board.height);
  }

  draw() {
    for (let i = this.board.elements.length - 1; i >= 0; i--) {
      let element = this.board.elements[i];
      this.drawElement(this.context, element);
    }
  }

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

  play() {
    if (this.board.playing) {
      this.clean();
      this.draw();
      this.board.ball.move();
    }
    this.draw();
  }
}

export default BoardView;
