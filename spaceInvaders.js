function Game (){
  this.level = 0;
  this.lives = 3;
  this.score = 0;
  this.maxW = 1200;
  this.minW = 70;
}

function Invaders (){
  this.x = 200;
  this.y = 100;
  this.maxW = 1200;
  this.minW = 70;
  this.control = "right";
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
    if (this.x > this.maxW) {
      this.control = "left";
    }
      else {
        this.control = "right";
      }

      if (this.control === "right") {
        this.x += 10;
        $('#invaders').css("left", this.x);
      }
      if (this.control === "left") {
        this.x -= 10;
        $('#invaders').css("left", this.x);
      }
    };
