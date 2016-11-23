const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;
const KEY_RIGHT_ARROW = 39;

var keyHeld_Gas = false;
var keyHeld_Reverse = false;
var keyHeld_TurnLeft = false;
var keyHeld_TurnRight = false;

var mouseX = 0;
var mouseY = 0;

function setupInput(){
    canvas.addEventListener('mousemove', updateMousePos);
    
    document.addEventListener('keydown',keyPressed);
    document.addEventListener('keyup',keyReleased);
}

function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;

	
}

function keyPressed(event){
    //console.log(event.keyCode);
    
    if(event.keyCode == KEY_LEFT_ARROW){
        carAng -= 0.05;
        keyHeld_TurnLeft = true;
    }
    
    if(event.keyCode == KEY_UP_ARROW){
        carSpeed += 0.05;
         keyHeld_Gas = true;
    }
    
    if(event.keyCode == KEY_DOWN_ARROW){
        carSpeed -= 0.05;
        keyHeld_Reverse = true;
    }
    
    if(event.keyCode == KEY_RIGHT_ARROW){
        carAng += 0.05;
        keyHeld_TurnRight = true;
    }   
    
}

function keyReleased(event){
    //console.log(event.keyCode);
    
    if(event.keyCode == KEY_LEFT_ARROW){
        keyHeld_TurnLeft = false;
    }
    
    if(event.keyCode == KEY_UP_ARROW){
         keyHeld_Gas = false;
    }
    
    if(event.keyCode == KEY_DOWN_ARROW){
        keyHeld_Reverse = false;
    }
    
    if(event.keyCode == KEY_RIGHT_ARROW){
        keyHeld_TurnRight = false;
    }   
    
}