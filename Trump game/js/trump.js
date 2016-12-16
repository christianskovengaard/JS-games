const PLAYER_MOVE_SPEED = 50.0;

//Total ego is the player life and is made up of pussy,money and fame
var egoPointsTotal = 45;
//Pussy is 1/3 of ego
var pussyPointsTotal = 15;
//Money is 1/3 of ego
var moneyPointsTotal = 15;
//Fame is 1/3 of ego
var famePointsTotal = 15;


var animatedTrumpSpriteStanding;
var animatedTrumpSpriteGoUp;
var animatedTrumpSpriteGoDown;
var animatedTrumpSpriteGoLeft;
var animatedTrumpSpriteGoRight;

var trumpDirection = 'STANDING';

function Trump() { 
    
    this.x = 0;
	this.y = 0;
	//this.myWarriorPic; // which picture to use
	this.name = "Mr. D Trump";
    this.isSpeaking = false;
    this.isSpeakingTimeout = false;
    
    this.init = function() {
		
        //Set trump
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
                    
                    //Set trump animation
                    this.initAnimations();
                    
					return;
				} // end of player start if
			} // end of col for
		} // end of row for
		console.log("NO PLAYER START FOUND!");
	} // end of warriorReset func
    
    this.initAnimations = function(){
         
        // Create animation UP
        animatedTrumpSpriteGoUp = sprite({
                context: canvasContext,
                width: 500,
                height: 50,
                image: trumpAnimatedGoUp,
                numberOfFrames: 10,
                ticksPerFrame: 2,
                atX: 0,
                atY: 0
            }); 
        
         // Create animation DOWN
          animatedTrumpSpriteGoDown = sprite({
                context: canvasContext,
                width: 500,
                height: 50,
                image: trumpAnimatedGoDown,
                numberOfFrames: 10,
                ticksPerFrame: 2,
                atX: 0,
                atY: 0
            });
        // Create animation LEFT
        animatedTrumpSpriteGoLeft = sprite({
                context: canvasContext,
                width: 500,
                height: 50,
                image: trumpAnimatedGoLeft,
                numberOfFrames: 10,
                ticksPerFrame: 2,
                atX: 0,
                atY: 0
            });
        // Create animation RIGHT
        animatedTrumpSpriteGoRight = sprite({
                context: canvasContext,
                width: 500,
                height: 50,
                image: trumpAnimatedGoRight,
                numberOfFrames: 10,
                ticksPerFrame: 2,
                atX: 0,
                atY: 0
            });
    }
    
    this.draw = function() {
        
        //document.getElementById('playerX').innerHTML = this.x;
        //document.getElementById('playerY').innerHTML = this.y;

        var atXatY = hasCameraScrolled(this.x,this.y);
        
        //Check for direction
        if(trumpDirection == 'UP'){
            //Minus 25 because it is a sprite
            animatedTrumpSpriteGoUp.atX = this.x-25;
            animatedTrumpSpriteGoUp.atY = this.y-25;
            
            //Run animation for trump
            animatedTrumpSpriteGoUp.render();
            animatedTrumpSpriteGoUp.update();
        }
        else if(trumpDirection == 'DOWN'){
            
            //Minus 25 because it is a sprite
            animatedTrumpSpriteGoDown.atX = this.x-25;
            animatedTrumpSpriteGoDown.atY = this.y-25;
            
            //Run animation for trump
            animatedTrumpSpriteGoDown.render();
            animatedTrumpSpriteGoDown.update();
            
        }
        else if(trumpDirection == 'LEFT'){
           //Minus 25 because it is a sprite
            animatedTrumpSpriteGoLeft.atX = this.x-25;
            animatedTrumpSpriteGoLeft.atY = this.y-25;
            
            //Run animation for trump
            animatedTrumpSpriteGoLeft.render();
            animatedTrumpSpriteGoLeft.update(); 
        }
        else if(trumpDirection == 'RIGHT'){
           //Minus 25 because it is a sprite
            animatedTrumpSpriteGoRight.atX = this.x-25;
            animatedTrumpSpriteGoRight.atY = this.y-25;
            
            //Run animation for trump
            animatedTrumpSpriteGoRight.render();
            animatedTrumpSpriteGoRight.update(); 
        }
        else{
            //Minus 25 because it is a sprite
            animatedTrumpSpriteStanding.atX = this.x-25;
            animatedTrumpSpriteStanding.atY = this.y-25;
            
            //Run animation for trump
            animatedTrumpSpriteStanding.render();
            animatedTrumpSpriteStanding.update(); 
        }
        
        //Set direction back to STANDING
        trumpDirection = 'STANDING';
        
        
    }
    
    
    this.move = function(direction){
        
        var tileType;
        
        var nextX = this.x;
        var nextY = this.y;
        
        trumpDirection = direction;

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
                levelGrid[walkIntoTileIndex] = TILE_GROUND;
                playAudio(RICH);
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
            case TILE_GARBAGE_CAN:
                hitGarbageCan(nextX,nextY,this.x,this.y);
                levelGrid[walkIntoTileIndex] = TILE_GROUND;
                trump.x = nextX;
                trump.y = nextY;
                sliderX = nextX;
                sliderY = nextY;
                break;    
            
            case TILE_GOAL:
                //Win game, load next level
                nextLevelScreenShow();
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
    