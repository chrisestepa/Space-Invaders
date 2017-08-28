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
        $("span").css({"background-image": "./img/1 1.jpg", "backgrund-size": "cover"});
      } else {
        this.y += 2;
        $('#invaders').css("top", this.y);
        $("span").css({"background-image": "./img/1 1.jpg", "backgrund-size": "cover"});
        this.control = "right";
      }
      break;
    case "right":
      if (this.x + 830 < (this.maxW)) {
        this.x += 5;
        $('#invaders').css("left", this.x);
        $("span").css({"background-image": "./img/1 1.jpg", "backgrund-size": "cover"});
      } else {
        this.y += 2;
        $('#invaders').css("top", this.y);
        $("span").css({"background-image": "./img/1 1.jpg", "backgrund-size": "cover"});
        this.control = "left";
      }
      break;
  }
};
