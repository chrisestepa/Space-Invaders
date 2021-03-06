var game = new Game();
var ship = new SpaceShip ();
var invader = new Invaders (200, 70);
var newFire = new Fire(ship.position);
var myInterval;
var gameOver = true;
var hitVar = 0;

var gameReady = function () {
if ($('.invader').length > 0){
    newFire.shipFire();
    game.score += newFire.checkCollision();
    invader.invadersMove();
    invader.invadersFire();
    hitVar = invader.checkCollision();
    if (hitVar){
      ship.position = 650;
      $("#spaceship").css("left", ship.position);
    }
    game.lives -= hitVar;
    $('#score').html("SCORE: " + game.score);
    gameOver = game.checkGame(invader.y);
    if (!gameOver) {
      clearInterval(myInterval);
      game.gameOver();
    }
}
else {
  game.youWin();
  clearInterval(myInterval);
}

};

$(document).ready(function (){
  $("#btn").on("click", function(){
    game.createGame();
    myInterval = setInterval (gameReady,40);
  });

  $("#instructions").on("click", function(){
    game.instructions();
  });

});

$(document).on('keydown', function(e) {
  var key = e.keyCode;
  if (key === 37) {
    if (ship.position > game.minW){
      ship.shipMove("left");
  }
}
  else if (key === 39){
    if (ship.position < game.maxW){
    ship.shipMove("right");
  }
}
  else if (key === 32){
    newFire.createFire(ship.position);

  }
});
