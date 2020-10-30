class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  Play(){
    form.hide();
    textSize(30);
    text("Game starts!!!",100,100);
    player.getPlayerInfo();
    if (allPlayers !== undefined){
      var displayPosition = 130;
      for (var i in allPlayers){
        if(i === "player" + player.index)
        fill("Green");
        else
        fill("black");
      textSize(15);
      displayPosition = displayPosition + 30;
      text(allPlayers[i].name + ": " + allPlayers[i].distance,200,displayPosition)
      }
    }
    if (keyDown(UP_ARROW) && player.index !== null){
      player.distance+= 50;
      player.update();

    }
  }
}
