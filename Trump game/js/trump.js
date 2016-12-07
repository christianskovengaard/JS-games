const PLAYER_MOVE_SPEED = 50.0;

//Total ego is the player life and is made up of pussy,money and fame
var egoPointsTotal = 45;
//Pussy is 1/3 of ego
var pussyPointsTotal = 15;
//Money is 1/3 of ego
var moneyPointsTotal = 15;
//Fame is 1/3 of ego
var famePointsTotal = 15;


function Trump() { 
    
    this.x = 0;
	this.y = 0;
	this.myWarriorPic; // which picture to use
	this.name = "Untitled Warrior";
    this.isSpeaking = false;
    this.isSpeakingTimeout = false;
    
    this.init = function(whichImage, warriorName) {
		this.name = warriorName;
		this.myWarriorPic = whichImage;
		
		for(var eachRow=0;eachRow<BRICK_ROWS;eachRow++) {
			for(var eachCol=0;eachCol<BRICK_COLS;eachCol++) {
				var arrayIndex = brickTileToIndex(eachCol, eachRow); 
				if(levelGrid[arrayIndex] == TILE_PLAYERSTART) {
					levelGrid[arrayIndex] = TILE_GROUND;
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
        
        //document.getElementById('playerX').innerHTML = this.x;
        //document.getElementById('playerY').innerHTML = this.y;

        var atXatY = hasCameraScrolled(this.x,this.y);
        
        drawBitmapCenteredWithRotation(this.myWarriorPic, atXatY[0],atXatY[1], 0);        
        
    }
    
    
    this.move = function(direction){
        
        var tileType;
        
        var nextX = this.x;
        var nextY = this.y;

        if(direction == 'LEFT') {
          nextX += -PLAYER_MOVE_SPEED;
        }
        if(direction == 'RIGHT') {
          nextX += PLAYER_MOVE_SPEED;
        }
        if(direction == 'UP') {
          nextY += -PLAYER_MOVE_SPEED;
        }
        if(direction == 'DOWN') {
          nextY += PLAYER_MOVE_SPEED;
        }
        
        //Check for enemy
        if(isEnemyAtIndex(nextX,nextY)){
            hitEnemy(nextX,nextY);
        }else {

            var walkIntoTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
            var walkIntoTileType = TILE_WALL;

            if(walkIntoTileIndex != undefined) {
                tileType = levelGrid[walkIntoTileIndex];
            }

        }    

        switch(tileType) {
            case TILE_GROUND:
            case TILE_BRIDGE:   
                trump.x = nextX;
                trump.y = nextY;
                sliderX = nextX;
                sliderY = nextY;
              break;    
            case TILE_MONEY:    
                gainPoints(MONEY_POINT);
                levelGrid[walkIntoTileIndex] = TILE_GROUND;
                trump.x = nextX;
                trump.y = nextY;
                sliderX = nextX;
                sliderY = nextY;
                break;            
            case TILE_COIN:
                gainPoints(MONEY_POINT);
                hitCoin(nextX,nextY);
                trump.x = nextX;
                trump.y = nextY;
                sliderX = nextX;
                sliderY = nextY;
                break;         
            case TILE_PUSSY:
                gainPoints(PUSSY_POINT);
                levelGrid[walkIntoTileIndex] = TILE_GROUND;
                trump.x = nextX;
                trump.y = nextY;
                sliderX = nextX;
                sliderY = nextY;
                break;
            case TILE_FAME:    
                gainPoints(FAME_POINT);
                levelGrid[walkIntoTileIndex] = TILE_GROUND;
                trump.x = nextX;
                trump.y = nextY;
                sliderX = nextX;
                sliderY = nextY;
                break;
            
            case TILE_GOAL:
                //Win game, load next level
                loadLevel('levelTwo');
                break;
                
            case TILE_WALL:
                default:
              break;
        
        
        
        }
        
    }
    
    
    this.speak = function(words,duration){
            
        var atXatY = hasCameraScrolled(this.x,this.y);
        
        drawBitmapCenteredWithRotation(speakBubble,(atXatY[0]+90),(atXatY[1]-60),0);
        
        colorText(words,atXatY[0]+35,atXatY[1]-75,'black');
        
        if(!this.isSpeakingTimeout){
            
            
            
            this.isSpeakingTimeout = true;
            
            console.log('isSpeakingTimeout: '+this.isSpeakingTimeout);
            
            setTimeout(function(){
                console.log('STOP!');
                trump.isSpeaking = false;
                trump.isSpeakingTimeout = false;
            },duration)
        }
        
    }
     
 }
    