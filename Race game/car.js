
const GROUNDED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERS_POWER = 0.2;
const TURN_RATE = 0.06;
const MIN_SPEED_TO_TURN = 0.5;

function Car() { 

    this.carX = 75;
    this.carY = 75;
    this.carAng = 0;
    this.carSpeed = 0;
    this.myCarPic;
    this.name = "Untitled car";
    
    this.keyHeld_Gas = false;
    this.keyHeld_Reverse = false;
    this.keyHeld_TurnLeft = false;
    this.keyHeld_TurnRight = false;
    
    this.controlKeyUp;
    this.controlKeyRight;
    this.controlKeyDown;
    this.controlKeyLeft;
    
    this.setUpInput = function(upKey,rightKey,downKey,leftKey)  {
        this.controlKeyUp = upKey;
        this.controlKeyRight = rightKey;
        this.controlKeyDown = downKey;
        this.controlKeyLeft = leftKey;  
    }
 
    this.carMove = function(){
        
        this.carSpeed *= GROUNDED_DECAY_MULT;
    
        if(this.keyHeld_Gas){
            this.carSpeed += DRIVE_POWER;
        }
        if(this.keyHeld_Reverse){
            this.carSpeed -= REVERS_POWER;
        }

        if(Math.abs(this.carSpeed) > MIN_SPEED_TO_TURN){
            if(this.keyHeld_TurnLeft){
                this.carAng -= TURN_RATE;
            }
            if(this.keyHeld_TurnRight){
                this.carAng += TURN_RATE;
            }

        }    

        this.carX += Math.cos(this.carAng) * this.carSpeed;
        this.carY += Math.sin(this.carAng) * this.carSpeed;
        
        carTrackHandeling(this);
    }
    
    
    this.drawCar = function(){
        
        drawBitmapCenteredWithRotation(this.myCarPic,this.carX,this.carY,this.carAng);  
    }
    
    this.carReset = function(whichImage,carName) {
        
        this.name = carName;
        this.myCarPic = whichImage;
        this.carSpeed = 0;
        
        for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
            for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {

                var arrayIndex = rowColToArrayIndex(eachCol,eachRow);

                if(trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
                    trackGrid[arrayIndex] = 0;
                    this.carAng = -90 * Math.PI/180.0;
                    this.carX = eachCol * TRACK_W + TRACK_W/2;
                    this.carY = eachRow * TRACK_H + TRACK_H/2;
                    return;
                }
            }
        }
    }

};