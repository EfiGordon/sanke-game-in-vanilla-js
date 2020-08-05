const stepRight = (point, step) => {
    const p = point;
    p.x = p.x + step;
    return p;
}

class Pos {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Snake {
    constructor(board) {
        this.board = board;
        this.step = 4;
        this.positionArray = []; // the last item is the head of the sneak
        this.currentInterval = null;
        this.speed = 500;
    }

    setPosition(arr) {
        this.positionArray = [...arr];
    }

    getPosition() {
        return this.positionArray;
    }

    goRight() {
        // remove the first node
        //add new node with the new position

        const newPosArray = [...this.positionArray];
        newPosArray.shift();    //remove the tail of the sneak
        const head = this.positionArray[this.positionArray.length - 1];
        newPosArray.push({
            ...head,
            x: head.x + this.step,
        })

        this.positionArray = newPosArray;
        this.board.drawSnake([...this.positionArray]);
    }

    goDown() {
        const newPosArray = [...this.positionArray];
        newPosArray.shift();    //remove the tail of the sneak
        const head = this.positionArray[this.positionArray.length - 1];
        newPosArray.push({
            ...head,
            y: head.y + this.step,
        })

        this.positionArray = newPosArray;
        this.board.drawSnake([...this.positionArray]);
    }

    goLeft() {
        const newPosArray = [...this.positionArray];
        newPosArray.shift();    //remove the tail of the sneak
        const head = this.positionArray[this.positionArray.length - 1];
        newPosArray.push({
            ...head,
            x: head.x - this.step,
        })

        this.positionArray = newPosArray;
        this.board.drawSnake([...this.positionArray]);
    }

    goUp() {
        const newPosArray = [...this.positionArray];
        newPosArray.shift();    //remove the tail of the sneak
        const head = this.positionArray[this.positionArray.length - 1];
        newPosArray.push({
            ...head,
            y: head.y - this.step,
        })

        this.positionArray = newPosArray;
        this.board.drawSnake([...this.positionArray]);
    }





}

export { Snake };