function Game (){
  this.level = 0;
  this.lives = 3;
  this.score = 0;
  this.maxW = 1250;
  this.minW = 82;
}

Game.prototype.createGame = function (){
  $("button").remove();
  $("h1").remove();
  console.log("remove button");
  $("<header>").appendTo("#space-invaders");
  console.log("add header");
  $("<div>", {"id": "score", "class": "col-md-6"}).html("Score: " + this.score).appendTo("header");
  $("<div>", {"id": "lives", "class": "col-md-6"}).html("Lives: ").appendTo("header");
  $("<div>", {"id": "invaders"}).appendTo("#space-invaders");
  for (var i=0; i < 5; i++){
    $("<div>", {"class": "row" + i}).appendTo("#invaders");
     for (var j=0; j < 11; j++){
      $("<span>", {"class": "single-invader"+i + j}).appendTo(".row" + i);
    }
    }
  /*$("<div>", {"id": "bunkers"}).appendTo("#space-invaders");
  for (var k=0; k < 4; k++){
    $("<div>", {"class": ("bunker" + k)}).appendTo("#bunkers");
  }*/
  $("<div>", {"id": "spaceship"}).appendTo("#space-invaders");
  $("<hr>").appendTo("#space-invaders");

};

Game.prototype.shipCollision = function (){
};

Game.prototype.invaderCollision = function (){
};
