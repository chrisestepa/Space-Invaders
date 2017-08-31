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
  $("<header>").appendTo("#space-invaders");
  $("<div>", {"id": "score", "class": "col-md-6"}).html("Score: " + this.score).appendTo("header");
  $("<div>", {"id": "lives", "class": "col-md-6"}).html("Lives: ").appendTo("header");
  $("<div>", {"id": "invaders"}).appendTo("#space-invaders");
  for (var i=0; i < 5; i++){
    $("<div>", {"class": "row" + i}).appendTo("#invaders");
     for (var j=0; j < 11; j++){
      $("<span>", {"class": "invader single-invader"+i + j}).appendTo(".row" + i);
    }
    }
  // BUNKERS
  $("<section>", {"id": "bunkers"}).appendTo("#space-invaders");
  for (var m = 0; m < 4; m++){
    bunkerBuilder(m);
  }
  /////////
  $("<div>", {"id": "spaceship"}).appendTo("#space-invaders");
  $("<hr>").appendTo("#space-invaders");

};

Game.prototype.checkGame = function() {
  $("#lives").html("Lives: " + this.lives);
  if (this.lives === 0) {
    return 0;
  } else {
    return 1;
  }
};

var bunkerBuilder = function (bunker){
  $("<div>", {"id": "bunker" + bunker, "class": "container"}).appendTo("#bunkers");
  $("<div>", {"class": "bunker-div solid left-corner"}).appendTo("#bunker" + bunker);
  for (var j = 0; j < 3; j++){
      $("<div>", {"class": "bunker-div solid"}).appendTo("#bunker" + bunker);
    }
    $("<div>", {"class": "bunker-div solid right-corner"}).appendTo("#bunker" + bunker);
    for (var k = 0; k < 6; k++){
      $("<div>", {"class": "bunker-div solid"}).appendTo("#bunker" + bunker);
    }
    for (var l = 0; l < 3; l++){
      $("<div>", {"class": "broke"}).appendTo("#bunker" + bunker);
    }
    $("<div>", {"class": "bunker-div solid"}).appendTo("#bunker" + bunker);
};
