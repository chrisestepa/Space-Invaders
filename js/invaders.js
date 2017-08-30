function Invaders (){
  this.x = 200;
  this.y = 70;
  this.maxW = 1200;
  this.minW = 70;
  this.control = "right";
  this.width = 965;
}

Invaders.prototype.invadersMove = function() {
  switch (this.control) {
    case "left":
      if (this.x > this.minW) {
        this.x -= 1;
        $('#invaders').css("left", this.x);
      } else {
        this.y += 40;
        $('#invaders').css("top", this.y);
        this.control = "right";
      }
      break;
    case "right":
      if (this.x + 550 < (this.maxW)) {
        this.x += 1;
        $('#invaders').css("left", this.x);
      } else {
        this.y += 40;
        $('#invaders').css("top", this.y);
        this.control = "left";
      }
      break;
  }
};
