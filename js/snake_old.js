const stepRight = (point, step) => {
    const p = point;
    p.x = p.x + step;
    return p;
}

const stepLeft = (point, step) => {
    point.x = point.x - step;
    return point;
}

const stepDown = (point, step) => {
    point.y = point.y - step;
    return point;
}

const stepUp = (point, step) => {
    point.y = point.y + step;
    return point;
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
        this.step = 2;
        this.array = [new Pos(0, 0), new Pos(1, 0), new Pos(2, 0)];
        this.currentInterval = null;
        this.speed = 500;
    }


    goLeft() {
        clearInterval(this.currentInterval);
        this.currentInterval = setInterval(() => {
            this.array = this.array.slice(1);
            this.array.push(stepLeft(this.array[this.array.length - 1], this.step))
            console.log({
                array: this.array
            });
            this.board.draw(this);
        }, this.speed);
    }

    goUp() {
        clearInterval(this.currentInterval);
        this.currentInterval = setInterval(() => {
            this.array = this.array.slice(1);
            this.array.push(stepUp(this.array[this.array.length - 1], this.step))
            console.log({
                array: this.array
            });
            this.board.draw(this);
        }, this.speed);
    }
    goRight() {
        clearInterval(this.currentInterval);
        console.log({
            arr: this.array
        })
        this.currentInterval = setInterval(() => {
            const arr = this.array.slice(1, this.array.length);
            arr.push(stepRight(arr[arr.length - 1], this.step));
            this.array = arr;
            console.log({
                arr2: this.array
            })
            this.board.drawSnake(this);

        }, this.speed);
    }
    goDown() {
        clearInterval(this.currentInterval);
        this.currentInterval = setInterval(() => {
            this.array = this.array.slice(1);
            this.array.push(stepDown(this.array[this.array.length - 1], this.step))
            this.board.drawSnake(this);
        }, this.speed);
    }
}

export { Snake };