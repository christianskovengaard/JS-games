const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;


var holdLeft = false;
var holdRight = false;
var holdUp = false;
var holdDown = false;


var mouseX = 0;
var mouseY = 0;

function initInputForDebugging() {
    document.addEventListener("keydown", keyPressed);
    canvas.addEventListener('mousemove', updateMousePos);
}

function setKeyHoldState(thisKey, setTo) {
    
    
    var nextX = sliderX;
    var nextY = sliderY;
    
    if(thisKey == KEY_LEFT_ARROW) {
      //holdLeft = setTo;
        nextX += -PLAYER_MOVE_SPEED;
    }
    if(thisKey == KEY_RIGHT_ARROW) {
      //holdRight = setTo;
        nextX += PLAYER_MOVE_SPEED;
    }
    if(thisKey == KEY_UP_ARROW) {
      //holdUp = setTo;
        nextY += -PLAYER_MOVE_SPEED;
    }
    if(thisKey == KEY_DOWN_ARROW) {
      //holdDown = setTo;
        nextY += PLAYER_MOVE_SPEED;
    }
    
    if(isBrickAtPixelCoord(nextX,nextY) == false) {
      sliderX = nextX;
      sliderY = nextY;
    
        
        trump.x = nextX;
        trump.y = nextY;
        
    }
}


function keyPressed(evt) {
    setKeyHoldState(evt.keyCode, true);
    evt.preventDefault(); // without this, arrow keys scroll the browser!
}


function showBrickIndexWithMouse(){
    var mouseBrickCol = Math.floor(mouseX / BRICK_W);
	var mouseBrickRow = Math.floor(mouseY / BRICK_H);
    var brickIndexUnderMouse = brickTileToIndex(mouseBrickCol,mouseBrickRow);
	colorText(mouseBrickCol+","+mouseBrickRow+":"+brickIndexUnderMouse, mouseX, mouseY, 'yellow');
}

function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;
}