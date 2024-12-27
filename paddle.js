class Paddle {
    constructor(x, y, width, height, canvasHeight, upKey, downKey) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 6;
        this.canvasHeight = canvasHeight;
        this.upKey = upKey;
        this.downKey = downKey;
        this.dy = 0;

        document.addEventListener('keydown', (event) => this.keyDownHandler(event));
        document.addEventListener('keyup', (event) => this.keyUpHandler(event));
    }

    keyDownHandler(event) {
        if (event.key === this.upKey) this.dy = -this.speed;
        else if (event.key === this.downKey) this.dy = this.speed;
    }

    keyUpHandler(event) {
        if (event.key === this.upKey || event.key === this.downKey) this.dy = 0;
    }

    update() {
        this.y += this.dy;
        if (this.y < 0) this.y = 0;
        else if (this.y + this.height > this.canvasHeight) this.y = this.canvasHeight - this.height;
    }

    draw(context) {
        context.fillStyle = "#fff";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}