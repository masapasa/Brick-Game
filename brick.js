class Brick {
  constructor(location, width, height) {
    this.location = location;
    this.width = width;
    this.height = height;
  }
  display() {
    rect(this.location.x, this.location.y, this.width, this.height);
  }
  isColliding(x, y) {
    if (
      y <= this.location.y + this.height &&
      y >= this.location.y &&
      x >= this.location.x &&
      x <= this.location.x + this.width
    ) {
      return true;
    } else {
      return false;
    }
  }
}
