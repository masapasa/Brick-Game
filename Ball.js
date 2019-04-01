class Ball {
  constructor() {}
  setUp() {
    /* this.position = position;
    this.velocity = velocity; */
    createCanvas(640, 360);
    background(255);
    /* position = createVector(100, 100);
    velocity = createVector(2.5, 5); */
  }
  draw() {
    background(0);
    /* position.add(velocity);

    if (position.x > width || position.x < 0) {
      velocity.x = velocity.x * -1;
    }
    if (position.y > height || position.y < 0) {
      velocity.y = velocity.y * -1;
    }

    stroke(0);
    strokeWeight(2); */
    fill(47);
    ellipse(position.x, position.y, 15, 15);
    /* rect(4, 12, 120, 4); */
  }
  /* move() {
    this.right = right;
    this.left = left;
  } */
}
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
  } */
