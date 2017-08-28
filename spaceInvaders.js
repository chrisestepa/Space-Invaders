function Game (){
  this.level = 0;
  this.lives = 3;
  this.score = 0;
  this.maxW = 1250;
  this.minW = 82;
}

function Invaders (xpos, ypos){
  this.x = xpos;
  this.y = ypos;
  this.maxW = 1200;
  this.minW = 70;
  this.control = "right";
  this.width = 965;
}

function SpaceShip (){
  this.position = 650;
}

Game.prototype.shipCollision = function (){
};

Game.prototype.invaderCollision = function (){
};

SpaceShip.prototype.shipMove = function(pos) {
    if (pos === "right") {
      this.position += 25;
      console.log(this.position);
      $('#spaceship').css("left", this.position);
    } else if (pos === "left") {
      this.position -= 25;
      $('#spaceship').css("left", this.position);
    }
};

Invaders.prototype.invadersMove = function() {
  console.log("invadersmove");
  switch (this.control) {
    case "left":
      if (this.x > this.minW) {
        this.x -= 5;
        $('#invaders').css("left", this.x);
      } else {
        this.y += 2;
        $('#invaders').css("top", this.y);
        this.control = "right";
      }
      break;
    case "right":
      if (this.x + 830 < (this.maxW)) {
        this.x += 5;
        $('#invaders').css("left", this.x);
      } else {
        this.y += 2;
        $('#invaders').css("top", this.y);
        this.control = "left";
      }
      break;
  }
};
