var carX = 75;
var carY = 75;
var carAng = 0;
var carSpeed = 0;

const GROUNDED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERS_POWER = 0.2;
const TURN_RATE = 0.06;
const MIN_SPEED_TO_TURN = 0.5;



function carMove(){
    
    carSpeed *= GROUNDED_DECAY_MULT;
    
    if(keyHeld_Gas){
        carSpeed += DRIVE_POWER;
    }
    if(keyHeld_Reverse){
        carSpeed -= REVERS_POWER;
    }
    
    if(Math.abs(carSpeed) > MIN_SPEED_TO_TURN){
        if(keyHeld_TurnLeft){
            carAng -= TURN_RATE;
        }
        if(keyHeld_TurnRight){
            carAng += TURN_RATE;
        }
            
    }    
    
    carX += Math.cos(carAng) * carSpeed;
    carY += Math.sin(carAng) * carSpeed;
    
}

function drawCar(){
    
 drawBitmapCenteredWithRotation(carPic,carX,carY,carAng);   
    
}