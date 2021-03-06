let position;
let velocity;
let gameOver = false;
let xBar = 112;
let yBar = 355;
let bricks = [];
let playerScore = 0;
let ACCElARATION = 0.1;

function setup() {
  createCanvas(640, 360);
  background(200);
  position = createVector(100, 200);
  velocity = createVector(2.5, 5);
  createBricks();
}

function createBricks() {
  // const bricks = [];
  const rows = 5;
  const bricksPerRow = 10;
  const brickWidth = this.width / bricksPerRow;
  for (let row = 0; row < rows; row++) {
    for (let i = 0; i < bricksPerRow; i++) {
      brick = new Brick(createVector(brickWidth * i, 25 * row), brickWidth, 25);
      bricks.push(brick);
    }
  }
  // return bricks;
}
function draw() {
  background(255);
  bricks.forEach(function(brick) {
    brick.display();
  });

  // Add the current speed to the position.
  position.add(velocity);

  if (position.x > width || position.x < 0) {
    velocity.x = velocity.x * -1;
  }
  if (position.y < 0) {
    velocity.y = velocity.y * -1;
  }
  if (position.x >= mouseX && position.x <= mouseX + 120) {
    if (position.y > yBar) {
      velocity.y = velocity.y * -1;
    }
  }
  if (position.y > height + 15) {
    gameOver = true;
    textSize(30);
    text("Game Over", 10, 300);
  }
  text(`Score:${playerScore}`, width - 150, height - 50);

  // Display circle at x position
  stroke(0);
  strokeWeight(2);
  fill(27);
  ellipse(position.x, position.y, 15, 15);
  if (mouseX >= 0 && mouseX <= width) rect(mouseX, yBar, 120, 4);
  if (mouseX < 0) rect(0, yBar, 120, 4);
  if (mouseX + 120 > width) rect(width - 120, yBar, 120, 4);
  bricks.forEach(function(brick, i) {
    if (brick.isColliding(position.x, position.y)) {
      velocity.y = velocity.y * -1;
      bricks.splice(i, 1);
      playerScore += 1;
      velocity.x += ACCElARATION * playerScore;
      velocity.y += ACCElARATION * playerScore;
    } else {
      brick.display();
    }
  });
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xBar = xBar - 30;
  } else if (keyCode === RIGHT_ARROW) {
    xBar = xBar + 30;
  }
}
