class Ball {
    constructor(x, y, radius, canvasWidth, canvasHeight) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = 3;
        this.dx = this.speed;
        this.dy = this.speed;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.player1_pts = 0;
        this.player2_pts = 0;
        this.move = false;

        document.addEventListener('keydown', (event) => this.start_game(event));
    }

    reset() {
        this.x = this.canvasWidth / 2;
        this.y = this.canvasHeight / 2;
        this.dx = -this.dx;
        this.dy = this.speed * (Math.random() > 0.5 ? 1 : -1);
        this.move = false;
    }

    update(paddle1, paddle2) {
        if(this.move === false) {
            return;
        }
        this.x += this.dx;
        this.y += this.dy;

        if (this.y - this.radius < 0 || this.y + this.radius > this.canvasHeight) {
            this.dy = -this.dy;
        }

        if (this.x - this.radius < 0) {
            this.increase_points(2);
            this.reset();
        } else if (this.x + this.radius > this.canvasWidth) {
            this.reset();
            this.increase_points(1);
        }

        if (
            this.x - this.radius < paddle1.x + paddle1.width &&
            this.y > paddle1.y &&
            this.y < paddle1.y + paddle1.height
        ) {
            this.dx = -this.dx;
        }

        if (
            this.x + this.radius > paddle2.x &&
            this.y > paddle2.y &&
            this.y < paddle2.y + paddle2.height
        ) {
            this.dx = -this.dx;
        }
    }

    draw(context) {
        context.fillStyle = "#fff";
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }

    increase_points(player) {
        if(player === 1) {
            this.player1_pts += 1;
            document.getElementsByName("pts1")[0].innerHTML = this.player1_pts;
        } else if (player === 2) {
            this.player2_pts += 1;
            document.getElementsByName("pts2")[0].innerHTML = this.player2_pts;
        }
    }

    start_game(event) {
        if(event.key === ' ') {
            this.move = true;
        }
    }

}