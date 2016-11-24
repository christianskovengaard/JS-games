

var camPanX = 0.0;
var camPanY = 0.0;
const PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_X = 150;
const PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_Y = 100;


function sliderReset() {
    // center slider on screen
    sliderX = canvas.width/2;
    sliderY = canvas.height/2;
}

function cameraFollow() {
    
    var cameraFocusCenterX = camPanX + canvas.width/2;
    var cameraFocusCenterY = camPanY + canvas.height/2;

    var playerDistFromCameraFocusX = Math.abs(sliderX-cameraFocusCenterX);
    var playerDistFromCameraFocusY = Math.abs(sliderY-cameraFocusCenterY);

    if(playerDistFromCameraFocusX > PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_X) {
      if(cameraFocusCenterX < sliderX)  {
        camPanX += PLAYER_MOVE_SPEED;
      } else {
        camPanX -= PLAYER_MOVE_SPEED;
      }
    }
    if(playerDistFromCameraFocusY > PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_Y) {
      if(cameraFocusCenterY < sliderY)  {
        camPanY += PLAYER_MOVE_SPEED;
      } else {
        camPanY -= PLAYER_MOVE_SPEED;
      }
    }

    // this next code blocks the game from showing out of bounds
    // (this isn't required, if you don't mind seeing beyond edges)
    if(camPanX < 0) {
      camPanX = 0;
    }
    if(camPanY < 0) {
      camPanY = 0;
    }
    var maxPanRight = BRICK_COLS * BRICK_W - canvas.width;
    var maxPanTop = BRICK_ROWS * BRICK_H - canvas.height;
    if(camPanX > maxPanRight) {
      camPanX = maxPanRight;
    }
    if(camPanY > maxPanTop) {
      camPanY = maxPanTop;
    }
}