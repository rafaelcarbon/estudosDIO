let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let game = setInterval(start, 100);

function background(){
    context.fillStyle = "lightgray";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function makeSnake(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function start(){

    let snakeX = snake[0].x;
    let snakeY = snake[0].Y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY += box;
    if(direction == "down") snakeY -= box;

    snake.pop();

    let newSnake = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newSnake);

    background();
    makeSnake();
}

