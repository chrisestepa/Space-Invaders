var game = new Game();
var ship = new SpaceShip ();
var invader = new Invaders (200, 70);
var newFire = new Fire(ship.position);

var gameReady = function () {
  newFire.shipFire();
  invader.invadersMove();
};

$(document).ready(function (){
  $("#btn").on("click", function(){
    game.createGame();
    setInterval (gameReady, 15);
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
    game.score += newFire.checkCollision();
    $('#score').html("Score: " + game.score);
  }
});