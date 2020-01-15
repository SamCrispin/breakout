class Player {
    constructor(keys) {
        this.vel = 6;
        this.width = 100;
        this.height = 20;
        this.pos = createVector(width / 2 - this.width/2, height - 50 - this.height/2);
        this.keys = keys;
        this.keysPressed = new Set();
    }

    render() {
        fill(100);
        noStroke();
        rect(this.pos.x, this.pos.y, 100, 20);
    }

    keyPress() {
        if (Object.values(this.keys).includes(key)) this.keysPressed.add(key);
    }

    keyRelease() {
        this.keysPressed.delete(key);
    }

    move() {
        let vel = 0;
        for (let keyPress of this.keysPressed) {
            if (keyPress === this.keys.left) {
                vel -= this.vel;
            } else if (keyPress === this.keys.right) {
                vel += this.vel;
            }
        }
        if ((this.pos.x + this.width + vel <= width) && (this.pos.x + vel >= 0)) this.pos.x += vel;
    }

    update() {
        this.move();
        this.render()
    }

    contains(vec) {
        return (vec.x >= this.pos.x && vec.x <= (this.pos.x + this.width) && vec.y >= this.pos.y && vec.y <= (this.pos.y + this.height));
    }
}