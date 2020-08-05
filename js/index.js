import { Board } from './board.js';
import { Snake } from './snake.js';

let board = new Board('myCanvas');
let snake = new Snake(board);
let speed = 10;
const currentPositionArray = [
    {
        x: 0,
        y: 0
    },
    {
        x: 1,
        y: 0
    },
    {
        x: 2,
        y: 0
    }
];
snake.setPosition([{ x: 0, y: 0 }, { x: 2, y: 0 }, { x: 4, y: 0 }]);
board.drawSnake(snake.getPosition());
let interval;
document.addEventListener('keydown', (keyEvent) => {
    clearInterval(interval);

    if (keyEvent.key == 'ArrowDown') {
        interval = setInterval(() => {
            snake.goDown()
        }, speed);
    }
    else if (keyEvent.key == 'ArrowLeft') {
        interval = setInterval(() => {
            snake.goLeft()
        }, speed);
    }
    else if (keyEvent.key == 'ArrowUp') {
        interval = setInterval(() => {
            snake.goUp()
        }, speed);
    }
    else if (keyEvent.key == 'ArrowRight') {
        interval = setInterval(() => {
            snake.goRight()
        }, speed);

    } else {
        console.log('What do you want?')
    }
});
