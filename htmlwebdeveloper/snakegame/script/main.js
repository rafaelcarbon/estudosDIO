let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
let direction = "right";
let game = setInterval(start, 100);
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

document.addEventListener("keydown", update);

snake[0] = {

    x: 7 * box,
    y: 7 * box

}

function background(){

    context.fillStyle = "lightgray";
    context.fillRect(0, 0, 16 * box, 16 * box);

}

function makesnake(){
    for(i=0; i < snake.length; i++){

        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box, box);

    }
}

function newfood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box)
}

function update(event){

    if(event.keyCode == 37 && direction != "right") direction= "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function start(){
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    background();
    makesnake();
    newfood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;


    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    let newsnake = {
        x: snakeX,
        y: snakeY
    }

    snake.pop();
    snake.unshift(newsnake);

}

