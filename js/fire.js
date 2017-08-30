function Fire(pos) {
  this.position = pos + 50;
  this.top = 620;
  this.yMax = 120;
  this.control = "ok";
  this.cont = 0;
}


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
};
