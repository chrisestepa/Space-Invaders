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
    var fire = ($("<div>", {"class": "shipFire"}).css({"left": pos + 50,"top": this.top}));
    fire.appendTo("#space-invaders");
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
  var bunkerHit = $(".shipFire").collision(".bunker-div");
  var invaderHit = $(".shipFire").collision(".invader");

  if (bunkerHit[0]) {
    $(bunkerHit).removeClass("bunker-div solid").addClass("broke");
    $('.shipFire').remove();
    this.control = "no";
    this.top = 620;
    }

  if (invaderHit[0]) {
    var score = this.checkScore(($(invaderHit)).parent().attr("class"));
    $(invaderHit).removeClass("invader").css("background", "rgba(0,0,0,0");
    $('.shipFire').remove();
    this.control = "no";
    this.top = 620;
    return score;
  }
  return 0;
};

Fire.prototype.checkScore = function(invader) {
  switch (invader) {
    case "row0":
      return 40;
    case "row1":
      return 20;
    case "row2":
      return 20;
    case "row3":
      return 10;
    case "row4":
      return 10;
    default:
      return 0;
  }
};
