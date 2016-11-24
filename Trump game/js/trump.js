  const PLAYER_MOVE_SPEED = 50.0;



  
  
  function sliderMove() {
    var nextX = sliderX;
    var nextY = sliderY;

    if(holdLeft) {
      nextX += -PLAYER_MOVE_SPEED;
    }
    if(holdRight) {
      nextX += PLAYER_MOVE_SPEED;
    }
    if(holdUp) {
      nextY += -PLAYER_MOVE_SPEED;
    }
    if(holdDown) {
      nextY += PLAYER_MOVE_SPEED;
    }

    if(isBrickAtPixelCoord(nextX,nextY) == false) {
      sliderX = nextX;
      sliderY = nextY;
    }
  }

  