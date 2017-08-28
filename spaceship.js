function SpaceShip (){
  this.position = 650;
  this.width = 100;
  this.top = 640;
  this.fire = [];
}

SpaceShip.prototype.createFire = function (i) {
  this.top = 640;
  this.fire.push($("<div>", {"id": "shipFire"}).css({"left": this.position + this.width/2}));
  $("body").append(this.fire[i]);
};

SpaceShip.prototype.shipFire = function (){
  this.top -= 70;
  $("#shipFire").css("top", this.top);
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
