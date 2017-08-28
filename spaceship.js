function SpaceShip (){
  this.position = 650;
}

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
