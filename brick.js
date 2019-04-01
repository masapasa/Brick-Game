class Brick {
  constructor() {}

  setup() {
    this.img = loadImage(
      "https://raw.githubusercontent.com/ironhack-webdev-squad-126/w2d5/master/assets/bird.png"
    );

    this.ypos = 200;
    this.velocity = 0;
    this.firstMouseClick = true;
    this.x = 300;
  }

  draw() {
    if (this.ypos > GAME_HEIGHT || this.ypos < 0) {
      game.over();
    }

    fill(0);

    // mouseIsPressed comes from P5
    if (mouseIsPressed) {
      if (this.firstMouseClick) {
        this.velocity = -6;
        this.firstMouseClick = false;
      }
      this.velocity += ACCELERATION * -1;
    } else {
      this.firstMouseClick = true;
      this.velocity += ACCELERATION;
    }

    this.ypos += this.velocity;

    image(this.img, this.x, this.ypos, this.img.width / 10, this.img.height / 10);
    this.setRect();
  }

  setRect() {
    this.rect = {
      left: this.x,
      top: this.ypos,
      right: this.x + this.img.width / 10,
      bottom: this.ypos + this.img.height / 10
    };
  }
}
