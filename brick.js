class Brick {
  constructor(location, width, height) {
    this.location = location;
    this.width = width;
    this.height = height;
  }
  display() {
    rect(this.location.x, this.location.y, this.width, this.height);
  }
}
