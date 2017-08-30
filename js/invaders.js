function Invaders (){
  this.x = 200;
  this.y = 70;
  this.maxW = 1200;
  this.minW = 70;
  this.maxY = 650;
  this.control = "right";
  this.width = 965;
  this.numOfInvaders = 55;
  this.fireControl = true;
  this.top = 0;
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

Invaders.prototype.invadersFire = function() {
  var invaders = $('.invader');
  var randomInvader = invaders[(Math.floor(Math.random() * this.numOfInvaders))];
  if (this.fireControl) {
    this.fire = ($("<div>", {"class": "invaderFire"}));
    this.fire.appendTo(randomInvader);
    this.fireControl = false;
  }
  this.top += 15;
  this.fire.css("top", this.top);
  if (this.top > this.maxY){
    this.top = 0;
    this.fireControl = true;
  }

};

Invaders.prototype.checkCollision = function() {
  var span = $(".invaderFire").collision("#spaceship");
  if (span[0]) {
    this.top = 0;
    return 1;
  }
  return 0;
};
