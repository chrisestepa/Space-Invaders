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
  console.log("THIS TOP: " + this.top);
  if (this.top > this.maxY){
    this.top = 0;
    this.fireControl = true;
  }

};


/*
Fire.prototype.createFire = function(pos) {
  if (this.control == "ok") {
    this.top = 620;
    this.fire = ($("<div>", {"class": "shipFire"}).css({"left": pos + 50,"top": this.top}));
    this.fire.appendTo("#space-invaders");
  }
};

Fire.prototype.shipFire = function() {
  if (this.top > this.yMax) {
    this.control = "no";
    this.top -= 15;
    $(".shipFire").css("top", this.top);
  } else {
    $(".shipFire").remove();
    this.control = "ok";
  }
};

Fire.prototype.checkCollision = function() {
  var span = $(".shipFire").collision(".invader");
  if (span[0]) {
    $(span).removeClass("invader").css("background", "rgba(0,0,0,0");
    $('.shipFire').remove();
    this.control = "no";
    this.top = 620;
  }
};*/
