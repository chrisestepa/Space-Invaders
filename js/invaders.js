function Invaders (){
  this.x = 200;
  this.y = 70;
  this.maxW = 930;
  this.minW = 70;
  this.maxY = 600;
  this.control = "right";
  this.fireControl = true;
  this.fireTop = 0;
  this.fireLeft = 0;
  this.audioHit = new Audio('music/explosion.wav');
}

Invaders.prototype.invadersMove = function() {
  this.width = ($('.row0 .invader').length) * 40 + 140;

  switch (this.control) {
    case "left":
      if (this.x > this.minW) {
        this.x -= 1;
        $('#invaders').css("left", this.x);
      } else {
        this.y += 30;
        $('#invaders').css("top", this.y);
        this.control = "right";
      }
      break;
    case "right":
      if (this.x + this.width < (this.maxW)) {
        this.x += 1;
        $('#invaders').css("left", this.x);
      } else {
        this.y += 30;
        $('#invaders').css("top", this.y);
        this.control = "left";
      }
      break;
  }
};

Invaders.prototype.invadersFire = function() {
  var invaders = $('.invader');
  var randomInvader = invaders[(Math.floor(Math.random() * invaders.length))];
  if (this.fireControl) {
    this.fireTop = $(randomInvader).position().top + $(randomInvader).height();
    this.fireLeft = $(randomInvader).position().left+($(randomInvader).width()/2 + 6);
    this.fire = ($("<div>", {"class": "invaderFire"}));
    this.fire.appendTo(randomInvader);
    this.fireControl = false;
  }
  this.fireTop += 25;
  this.fire.css({"top": this.fireTop, "left": this.fireLeft});
  if (this.fireTop > this.maxY){
    this.fireTop = 0;
    this.fireLeft = 0;
    this.fire.remove();
    this.fireControl = true;
  }

};

Invaders.prototype.checkCollision = function() {
  var collision1 = $(".invaderFire").collision("#spaceship");
  var collision2 = $(".invaderFire").collision(".invader");
  var bunkerHit = $(".invaderFire").collision(".bunker-div");

  if (bunkerHit[0]) {
    $(bunkerHit).removeClass("bunker-div solid").addClass("broke");
    $('.invaderFire').remove();
    this.fireTop = 0;
    this.fireLeft = 0;
    }

  if (collision2[0]){
    this.fire.addClass("hidden");
    return 0;
  }

  if (collision1[0]) {
    this.audioHit.play();
    this.fireTop = 0;
    this.fireLeft = 0;
    return 1;
  }
  return 0;
};
