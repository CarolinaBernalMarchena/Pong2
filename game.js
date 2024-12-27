const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;

const paddleWidth = 10, paddleHeight = 100;
const player1 = new Paddle(20, canvas.height / 2 - paddleHeight / 2, paddleWidth, paddleHeight, canvas.height, 'w', 's');
const player2 = new Paddle(canvas.width - 30, canvas.height / 2 - paddleHeight / 2, paddleWidth, paddleHeight, canvas.height, 'ArrowUp', 'ArrowDown');
const ball = new Ball(canvas.width / 2, canvas.height / 2, 8, canvas.width, canvas.height);

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    player1.update();
    player2.update();
    ball.update(player1, player2);

    player1.draw(context);
    player2.draw(context);
    ball.draw(context);

    requestAnimationFrame(gameLoop);
}

gameLoop();