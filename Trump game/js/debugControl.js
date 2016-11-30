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

function keyPressed(evt) {
    
    if(evt.keyCode == KEY_LEFT_ARROW) {
      trump.move('LEFT');
    }
    if(evt.keyCode == KEY_RIGHT_ARROW) {
        trump.move('RIGHT');
    }
    if(evt.keyCode == KEY_UP_ARROW) {
        trump.move('UP');
    }
    if(evt.keyCode == KEY_DOWN_ARROW) {
        trump.move('DOWN');
    }
    
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