var carX = 75;
var carY = 75;
var carAng = 0;
var carSpeed = 0;

const GROUNDED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERS_POWER = 0.2;
const TURN_RATE = 0.03;

var carPic = document.createElement('img');
var carPicLoaded = false;

function carTrackHandeling(){
    
    // Detech collision between car and track, and set track to false, and bounce car
    var carTrackCol = Math.floor(carX / TRACK_W);
	var carTrackRow = Math.floor(carY / TRACK_H);
    var trackIndexUnderCar = rowColToArrayIndex(carTrackCol,carTrackRow);  
    if( carTrackCol >= 0 &&
        carTrackCol < TRACK_COLS &&
        carTrackRow >= 0 &&
        carTrackRow < TRACK_ROWS){
        
        if(isTrackAtColRow(carTrackCol,carTrackRow)){
            
            carX -= Math.cos(carAng) * carSpeed;
	        carY -= Math.sin(carAng) * carSpeed;
            carSpeed *= -0.5;
        }    
    }
     
}


function carMove(){
    
    carSpeed *= GROUNDED_DECAY_MULT;
    
    if(keyHeld_Gas){
        carSpeed += DRIVE_POWER;
    }
    if(keyHeld_Reverse){
        carSpeed -= REVERS_POWER;
    }
    if(keyHeld_TurnLeft){
        carAng -= TURN_RATE;
    }
    if(keyHeld_TurnRight){
        carAng += TURN_RATE;
    }
    carX += Math.cos(carAng) * carSpeed;
	carY += Math.sin(carAng) * carSpeed;
    
}

function drawCar(){
    if(carPicLoaded){
        drawBitmapCenteredWithRotation(carPic,carX,carY,carAng);   
    }
}

function carImageLoad(){
     carPic.onload = function(){
        carPicLoaded = true;
    }
    carPic.src = 'player1car.png';
}