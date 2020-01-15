class Level {
    constructor(level) {
        this.dims = {
            cols: levels[level].cols,
            rows: levels[level].rows
        };
        this.spacingX = levels[level].spacingX;
        this.spacingY = levels[level].spacingY;
        this.active = false;
    }

    createBricks() {
        this.bricks = [];
        for (let i = 0; i < this.dims.cols; i++) {
            this.bricks[i] = [];
            for (let j = 0; j < this.dims.rows; j++) {
                this.bricks[i][j] = new Brick(j, i, this.spacingX, this.spacingY);
                this.bricks[i][j].instantiate();
            }
        }
    }

    render() {
        for (let i = 0; i < this.dims.cols; i++) {
            for (let j = 0; j < this.dims.rows; j++) {
                if (this.bricks[i][j]) this.bricks[i][j].render();
            }
        }
    }

    start() {
        if (this.active === false) {
            ball.vel.set(0, -ball.maxVel);
        }
    }
}