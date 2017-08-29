function Fire(pos) {
  this.position = pos + 50;
  this.top = 620;
  this.yMax = 120;
  this.control = "ok";
}

Fire.prototype.createFire = function(pos) {
  if (this.control == "ok") {
    this.top = 620;
    this.fire = ($("<div>", {
      "class": "shipFire"
    }).css({
      "left": pos + 50,
      "top": this.top
    }));
    this.fire.appendTo("#space-invaders");
  }
};

Fire.prototype.shipFire = function() {
  if (this.top > this.yMax) {
    this.control = "no";
    this.top -= 25;
    $(".shipFire").css("top", this.top);
      } else {
    $(".shipFire").remove();
    this.control = "ok";
  }
};

Fire.prototype.checkCollision = function() {

  var cont = 0;

  var row0 = $('.row0').children();
  var row1 = $('.row1').children();
  var row2 = $('.row2').children();
  var row3 = $('.row3').children();
  var row4 = $('.row4').children();

  var span0 = $(".shipFire").collision(row0);
  var span1 = $(".shipFire").collision(row1);
  var span2 = $(".shipFire").collision(row2);
  var span3 = $(".shipFire").collision(row3);
  var span4 = $(".shipFire").collision(row4);


  if (span0) {
    $(span0).css("background", "rgba(0,0,0,0");
    cont += 40;
  }

  if (span1) {
    $(span1).css("background", "rgba(0,0,0,0");
    cont += 20;
  }

  if (span2) {
    $(span2).css("background", "rgba(0,0,0,0");
    cont += 20;
  }

  if (span3) {
    $(span3).css("background", "rgba(0,0,0,0");
    cont += 10;
  }

  if (span4) {
    $(span4).css("background", "rgba(0,0,0,0");
    cont += 10;
  }
  console.log(cont);
  return cont;
};
