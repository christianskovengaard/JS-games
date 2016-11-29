const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

var mouseX = 0;
var mouseY = 0;

function setupInput() {
	canvas.addEventListener('mousemove', updateMousePos);

	document.addEventListener('keydown', keyPressed);

	blueWarrior.setupInput(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW);
} 

function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;

	// cheat / hack to test car in any position
	/*carX = mouseX;
	carY = mouseY;
	carSpeedX = 4;
	carSpeedY = -4;*/
}

function keySet(keyEvent, setTo) {
	if(keyEvent.keyCode == blueWarrior.controlKeyLeft) {
        blueWarrior.move('LEFT');
	}
	if(keyEvent.keyCode == blueWarrior.controlKeyRight) {
        blueWarrior.move('RIGHT');
	}
	if(keyEvent.keyCode == blueWarrior.controlKeyUp) {
        blueWarrior.move('UP');
	}
	if(keyEvent.keyCode == blueWarrior.controlKeyDown) {
        blueWarrior.move('DOWN');
	}
}

function keyPressed(evt) {
	// console.log("Key pressed: "+evt.keyCode);
	keySet(evt, true);
	evt.preventDefault();
}
