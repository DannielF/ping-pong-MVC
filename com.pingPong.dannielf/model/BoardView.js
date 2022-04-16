class BoardView {
  constructor({ canvas, board }) {
    this.canvas = canvas;
    this.canvas.width = board.width;
    this.canvas.height = board.height;
    this.board = board;
    this.context = canvas.getContext('2d');
  }

  draw() {
    for (let i = this.board.elements.length - 1; i >= 0; i--) {
      let element = this.board.elements[i];
      this.drawElement(this.context, element);
    }
  }

  drawElement(context, element) {
    if (element !== null && element.hasOwnProperty("kind")) {
      switch (element.kind) {
        case 'rectangle':
          context.fillRect(element.x, element.y, element.width, element.height);
          break;
      }
    }
  }
}

export default BoardView;
