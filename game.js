/* const ball = new Ball();

function setup() {
  ball.setup();
}

function draw() {
  ball.draw();
} */
let position;
let velocity;
let ball = new Ball();
let gameOver = false;
let xBar = 112;
let yBar = 355;

function setup() {
  createCanvas(640, 360);
  background(200);
  position = createVector(100, 100);
  velocity = createVector(2.5, 5);
}

function draw() {
  background(255);

  // Add the current speed to the position.
  position.add(velocity);

  if (position.x > width || position.x < 0) {
    velocity.x = velocity.x * -1;
  }
  if (position.y < 0) {
    velocity.y = velocity.y * -1;
  }
  if (position.x >= xBar && position.x <= xBar + 120) {
    if (position.y > yBar) {
      velocity.y = velocity.y * -1;
    }
  }
  if (position.y > height) {
    gameOver = true;
    textSize(50);
    text("Game Over", 10, 30);
  }

  // Display circle at x position
  stroke(0);
  strokeWeight(2);
  fill(27);
  ellipse(position.x, position.y, 15, 15);
  rect(xBar, yBar, 120, 4);
}
function keyPressed(rect) {
  if (keyCode === LEFT_ARROW) {
    xBar = xBar - 15;
  } else if (keyCode === RIGHT_ARROW) {
    xBar = xBar + 15;
  }
}
// bouncePaddle() {
// We are within the width of the paddle
/* if (position.x >= xBar && position.x <= xBar + 120) {
  if (this.location.y + this.radius > this.paddle.location.y) {
    this.reverse("y");
    this.location.y = this.paddle.location.y - this.radius - 1;
  }
}
if (position.x >= xBar && this.location.x - this.radius <= this.paddle.location.x + this.paddle.width) {
  if (this.location.y + this.radius > this.paddle.location.y) {
    this.reverse("y");
    this.location.y = this.paddle.location.y - this.radius - 1;
  }
} */
// }
/* let angle;
let position;
let shot = false;

let ball;

function setup() {
  createCanvas(640, 360);
  angle = -PI / 4;
  position = createVector(50, 300);
  ball = new CannonBall(position.x, position.y);
}

function draw() {
  background(220);

  push();
  translate(position.x, position.y);
  rotate(angle);
  rect(0, -5, 50, 10);
  pop();

  if (shot) {
    let gravity = new createVector(0, 0.2);
    ball.applyForce(gravity);
    ball.update();
  }
  ball.display();

  if (ball.position.y > height) {
    ball = new CannonBall(position.x, position.y);
    shot = false;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    angle += 0.1;
  } else if (keyIsDown(LEFT_ARROW)) {
    angle -= 0.1;
  }
}

function keyPressed() {
  if (key == " ") {
    shot = true;
    let force = p5.Vector.fromAngle(angle);
    force.mult(10);
    ball.applyForce(force);
  }
} */
