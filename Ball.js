class Ball {
    constructor(x, y) {
        this.radius = 10;
        this.pos = createVector(player.pos.x + player.width / 2, player.pos.y - this.radius - 1);
        this.vel = createVector(0);
        this.maxVel = 3;
        this.feelers = 8;
    }

    render() {
        fill(0);
        noStroke();
        circle(this.pos.x, this.pos.y, this.radius * 2);
    }

    update() {
        this.collideBricks();
        this.collideWalls();
        this.pos.add(this.vel);
        this.render();
    }

    collideBricks() {
        let angle = -HALF_PI, increment = TWO_PI / this.feelers, vec;
        for (let i = 0; i < this.feelers; i++, angle += increment) {
            vec = createVector(cos(angle) * this.radius, sin(angle) * this.radius);
            vec.add(this.pos);
            for (let j = 0; j < level.dims.cols; j++) {
                for (let k = 0; k < level.dims.rows; k++) {
                    let brick = level.bricks[j][k];
                    if (!brick) continue;
                    if (brick.contains(vec)) {
                        this.vel.y = -this.vel.y;
                        if (brick.hit() === 0) level.bricks[j][k] = 0;
                        // this.vel.mult(1.1);
                    }
                }
            }
            if (player.contains(vec)) {
                let xHit = this.pos.x - player.pos.x;
                let angle = map(xHit, 0, 100, -PI * 3 / 4, -QUARTER_PI);
                let x = cos(angle) * this.maxVel;
                this.vel.set(x, -this.vel.y);
            }
        }
    }

    collideWalls() {
        if (this.pos.x - this.radius <= 0 || this.pos.x + this.radius >= width) this.vel.x = -this.vel.x;
        if (this.pos.y - this.radius <= 0 || this.pos.y + this.radius >= height) this.vel.y = -this.vel.y;
    }
}