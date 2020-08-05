class Board {
    constructor(canvasId, canvasWidth, canvasHeight, snakeColor, initialSnakeSize) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas.getContext) throw new Error('No canvas supported');
        this.canvasWidth = canvasWidth || 400;
        this.canvasHeight = canvasHeight || 400;
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
        this.fillBoard();

    }

    fillBoard(color) {
        this.boardContext = this.canvas.getContext("2d");
        this.boardContext.fillStyle = color || "#F0F8FF";
        this.boardContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    drawSnake(positionObjectsArray) {
        if (!this.snakeContext) {
            this.snakeContext = this.canvas.getContext("2d");
            this.snakeContext.fillStyle = "#C71585";
        }
        this.clear(this.snakeContext);
        for (let pos of positionObjectsArray) {
            this.snakeContext.fillRect(pos.x, pos.y, 8, 8);
        }
    }

    clear(context) {
        context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    getSnakeContext() {
        return this.snakeContext;
    }

}

export { Board }