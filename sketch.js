let player, level, ball;

function setup() {
    createCanvas(1024, 1024);
    player = new Player({left: "ArrowLeft", right: "ArrowRight"});
    level = new Level(0);
    level.createBricks();
    ball = new Ball();
}

function draw() {
    background(200);
    player.update();
    level.render();
    ball.update();
    fill(0);
    stroke(4);
    // line(width / 2, 0, width / 2, height);
    // line(0, height / 2, width, height / 2);
    // line(0, (2*height) / 3, width, (2*height) / 3);
}

function keyPressed() {
    player.keyPress();
    if (key === " ") level.start();
}

function keyReleased() {
    player.keyRelease();
}