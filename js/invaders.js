function Invaders (xpos, ypos){
  this.x = xpos;
  this.y = ypos;
  this.maxW = 1200;
  this.minW = 70;
  this.control = "right";
  this.width = 965;
}

Invaders.prototype.invadersMove = function() {
  switch (this.control) {
    case "left":
      if (this.x > this.minW) {
        this.x -= 5;
        $('#invaders').css("left", this.x);
      } else {
        this.y += 15;
        $('#invaders').css("top", this.y);
        this.control = "right";
      }
      break;
    case "right":
      if (this.x + 550 < (this.maxW)) {
        this.x += 5;
        $('#invaders').css("left", this.x);
      } else {
        this.y += 15;
        $('#invaders').css("top", this.y);
        this.control = "left";
      }
      break;
  }
};
