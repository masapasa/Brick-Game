class Brick {
  constructor(location, width, height) {
    this.location = location;
    this.width = width;
    this.height = height;
    this.color = this.randomColor();
  }
  display() {
    fill(this.color);
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

  randomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
