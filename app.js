var ship = new SpaceShip ();
var game = new Game();
var invader = new Invaders (200, 100);

var gameReady = function () {
  invader.invadersMove();
  ship.shipFire();
};

$(document).ready(function (){
  $("#btn").on("click", function(){
    game.createGame();
    setInterval (gameReady, 200);
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
    var i = 0;
    ship.createFire(i);
    i++;
  }
});
