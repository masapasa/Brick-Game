let position;
let velocity;
let gameOver = false;
let xBar = 112;
let yBar = 355;
let bricks;

function setup() {
  createCanvas(640, 360);
  background(200);
  position = createVector(100, 100);
  velocity = createVector(2.5, 5);
  bricks = new Brick();
}
function createBricks() {
  const bricks = [];
  const rows = 10;
  const bricksPerRow = 10;
  const brickWidth = this.width / bricksPerRow;
  for (let row = 0; row < rows; row++) {
    for (let i = 0; i < bricksPerRow; i++) {
      brick = new Brick(createVector(brickWidth * i, 25 * row), brickWidth, 25);
      bricks.push(brick);
    }
  }
  return bricks;
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

Brick.display();
/* class Ball {
  constructor() {
    this.xPos = 200;
    this.yPos = 300;
    this.xVel = xVel;
    this.yVel = yVel;
  }
  setUp() {
    createCanvas(640, 360);
    background(255);
    position = createVector(100, 100);
    velocity = createVector(2.5, 5);
  }
  draw() {
    background(255);

    position.add(xVel, yVel);

    if (xPos > width || xPos < 0) {
      xVel = xVel * -1;
    }
    if (yPos > height || yPos < 0) {
      yVel = yVel * -1;
    }

    stroke(0);
    strokeWeight(2);
    fill(27);
    ellipse(xPos, yPos, 15, 15);
  }
  move() {
    this.right = right;
    this.left = left;
  }
} */ // class Ball {
//   constructor() {}
//   setUp() {
//     /* this.position = position;
//     this.velocity = velocity; */
//     createCanvas(640, 360);
//     background(255);
//     /* position = createVector(100, 100);
//     velocity = createVector(2.5, 5); */
//   }
//   draw() {
//     background(0);
//     /* position.add(velocity);

//     if (position.x > width || position.x < 0) {
//       velocity.x = velocity.x * -1;
//     }
//     if (position.y > height || position.y < 0) {
//       velocity.y = velocity.y * -1;
//     }

//     stroke(0);
//     strokeWeight(2); */
//     fill(47);
//     ellipse(position.x, position.y, 15, 15);
//     /* rect(4, 12, 120, 4); */
//   }
//   /* move() {
//     this.right = right;
//     this.left = left;
//   } */

// }
