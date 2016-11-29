const PLAYER_MOVE_SPEED = 50.0;


function Trump() { 
    
    this.x = 0;
	this.y = 0;
	this.myWarriorPic; // which picture to use
	this.name = "Untitled Warrior";
    
    
    
    this.reset = function(whichImage, warriorName) {
		this.name = warriorName;
		this.myWarriorPic = whichImage;
		
		

		for(var eachRow=0;eachRow<BRICK_ROWS;eachRow++) {
			for(var eachCol=0;eachCol<BRICK_COLS;eachCol++) {
				var arrayIndex = brickTileToIndex(eachCol, eachRow); 
				if(worldGrid[arrayIndex] == TILE_PLAYERSTART) {
					worldGrid[arrayIndex] = TILE_GROUND;
					this.x = eachCol * BRICK_W + BRICK_W/2;
					this.y = eachRow * BRICK_H + BRICK_H/2;
                    //Set sliderX and sliderY for the cameraControl
                    sliderX = this.x;
                    sliderY = this.y;
					return;
				} // end of player start if
			} // end of col for
		} // end of row for
		console.log("NO PLAYER START FOUND!");
	} // end of warriorReset func
    
    
    this.draw = function() {
        
        document.getElementById('playerX').innerHTML = this.x;
        document.getElementById('playerY').innerHTML = this.y;
        
        //Check for if canvas has scrolled on X-axis
        if(camPanX > 0 && camPanY == 0){
            //Redraw the amount the canvas has scrolled from the players position
            newX = this.x - camPanX;
            drawBitmapCenteredWithRotation(this.myWarriorPic, newX,this.y, 0);       
        } else if(camPanX == 0  && camPanY > 0){
            newY = this.y - camPanY;
            drawBitmapCenteredWithRotation(this.myWarriorPic, this.x,newY, 0);       
        } else if(camPanX > 0 && camPanY > 0){
            newX = this.x - camPanX;
            newY = this.y - camPanY;
            drawBitmapCenteredWithRotation(this.myWarriorPic, newX,newY, 0);
        }else{
            drawBitmapCenteredWithRotation(this.myWarriorPic, this.x,this.y, 0);        
        }
        
        
        
    }
    
    
    this.move = function(direction){
        
        var nextX = this.x;
        var nextY = this.y;

        if(direction == 'UP') {
          nextX += -PLAYER_MOVE_SPEED;
        }
        if(direction == 'DOWN') {
          nextX += PLAYER_MOVE_SPEED;
        }
        if(direction == 'LEFT') {
          nextY += -PLAYER_MOVE_SPEED;
        }
        if(direction == 'RIGHT') {
          nextY += PLAYER_MOVE_SPEED;
        }

        if(isBrickAtPixelCoord(nextX,nextY) == false) {
          sliderX = nextX;
          sliderY = nextY;

        } 
    }
     
 }
    