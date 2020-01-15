class Brick {
    constructor(col, row, spacingX, spacingY) {
        this.pos = createVector(col, row);
        this.pos.x -= floor(level.dims.rows / 2);
        this.width = 150;
        this.height = 20;
        this.lives = row + 1;
        this.offsetX = width / 2;
        this.offsetY = floor((height * 2) / 3 + this.height / 2);
        this.spacingX = spacingX;
        this.spacingY = spacingY;
    }

    static colours = [
        // "#c800ff",
        // "#ff00bf",
        // "#ff0000",
        // "#ff3333",
        // "#ff6e6e"
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
    ];

    instantiate() {
        let x, y;
        x = this.offsetX + (this.pos.x * (this.width + this.spacingX));
        if (level.dims.rows % 2 === 0) {
            x += (this.width + this.spacingX) / 2;
        }
        x -= this.width/2;
        y = this.offsetY - (level.dims.cols - this.pos.y) * (this.height + this.spacingY) + this.spacingY - this.height/2;
        this.pos.set(x, y);
    }

    render() {
        fill(Brick.colours[this.lives - 1]);
        strokeWeight(2);
        stroke(0);
        rectMode(CORNER);
        rect(this.pos.x, this.pos.y, this.width, this.height);
    }

    contains(vec) {
        return (vec.x >= this.pos.x && vec.x <= (this.pos.x + this.width) && vec.y >= this.pos.y && vec.y <= (this.pos.y + this.height));
    }

    hit() {
        return --this.lives;
    }
}