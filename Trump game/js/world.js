const TILE_GROUND = 0;
const TILE_WALL = 1;
const TILE_PLAYERSTART = 2;
const TILE_GOAL = 3;
const TILE_KEY = 4;
const TILE_DOOR = 5;
const TILE_BRIDGE = 6;
const TILE_ENEMYSTART = 7;
const TILE_MONEY = 8;
const TILE_FAME = 9;
const TILE_PUSSY = 10;
const TILE_COIN = 11;
const TILE_AIR = 12;

const TILE_BUILDING_1 = 13;
const TILE_BUILDING_2 = 14;
const TILE_BUILDING_3 = 15;
const TILE_BUILDING_4 = 16;


const TILE_TRUMP_ANIMATED = 17;

const TILE_GARBAGE_CAN = 18;

const BRICK_W = 50;
const BRICK_H = 50;

var BRICK_COLS = 0;
var BRICK_ROWS = 0;


/*
var levelTEST =
      [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
        1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1,
        1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
*/

var levelOne =
      [ 12, 12, 12, 12, 12, 12, 12, 12, 12, 
        12, 12, 12, 12, 16 , 15 , 14 , 13 , 1 , 
        12, 12, 12, 12, 1 , 17 , 2 , 18 , 1 , 
        12, 12, 12, 12, 1 , 0 , 0 , 0 , 1 , 
        12, 12, 12, 12, 1 , 0,  0 , 0,  1 , 
        12, 12, 12, 12, 12, 12, 6 , 12, 12, 
        12, 12, 12, 12, 6 , 6 , 6 , 12, 12, 
        12, 12, 12, 12, 6 , 12, 12, 12, 12, 
        1 , 0 , 0 , 0, 0,  11 , 0 , 18 , 1 , 
        1 , 0 , 0 , 11, 0 , 0 , 0 , 0 , 1 , 
        1 , 0 , 7 , 1 , 1 , 1 , 0 , 7 , 1 , 
        1 , 0 , 0 , 0 , 7 , 0 , 0 , 0 , 1 , 
        1 , 18 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 
        12, 12, 12, 12, 6 , 12, 12, 12, 12, 
        1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 
        1 , 0 , 3 , 0 , 0 , 0 , 0 , 0 , 1 ];

var levelTwo =
      [   12, 12, 12, 12, 12, 12, 12, 12, 12, 
          12, 12, 12, 12, 1 , 1 , 1 , 1 , 1 , 
          12, 12, 12, 12, 1 , 9 , 2 , 0 , 1 , 
          12, 12, 12, 12, 1 , 0 , 0 , 0 , 1 , 
          12, 12, 12, 12, 1 , 0,  0 , 0,  1 , 
          12, 12, 12, 12, 12, 12, 6 , 12, 12, 
          12, 12, 12, 12, 12, 12, 6 , 12, 12, 
          12, 12, 12, 12, 12, 12, 6, 12, 12, 
          1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 
          1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 ,
          1 , 0 , 0 , 7 , 0 , 0 , 0 , 0 , 1 , 
          1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1,
          1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 ];


 
var levelGrid = [];

//Init the levelList
var levelList = [
    {levelName: 'levelOne', levelGrid: levelOne, levelBrickCols: 9, levelBrickRows: 16},
    {levelName: 'levelTwo', levelGrid: levelTwo, levelBrickCols: 9, levelBrickRows: 13}
];

function loadLevel(){
    
    //Clear animations
    animationsList = [];
    
    //Get First level in levelList
    console.log(levelList[0].levelName);
    
    var whichLevel = levelList[0].levelName;
     
    for(var i=0;i<levelList.length;i++) {
		if(levelList[i].levelName === whichLevel) {
            
            BRICK_COLS = levelList[i].levelBrickCols;
            BRICK_ROWS = levelList[i].levelBrickRows;   
            
            //Set number of enemies
            enemyTotalNumberStart = countEnemies(levelList[i].levelGrid);
            //Set number of animations
            totalNumberOfAnimations = countAnimations(levelList[i].levelGrid);

            //Load level by copying the current level to levelGrid array
            levelGrid = levelList[i].levelGrid.slice();
            
            //init Trump
            trump.init();
    
            //init enemies
            enemy.init();
            
        }
    }
    
    //Remove level from levelList
    levelList.shift();
    
    showGameCanvas();
    nextLevelScreenHide();
    
}


function countEnemies(whichLevel){
    return whichLevel.filter(function(x){return x==TILE_ENEMYSTART}).length;
}

function countAnimations(whichLevel){
    return whichLevel.filter(function(y){return y==TILE_COIN}).length;
}

function drawWorld(){
    
    canvasContext.save(); // needed to undo this .translate() used for scroll

    // this next line is like subtracting camPanX and camPanY from every
    // canvasContext draw operation up until we call canvasContext.restore
    // this way we can just draw them at their "actual" position coordinates
    canvasContext.translate(-camPanX,-camPanY);

    drawBricksOnScreen();
    
    canvasContext.restore(); // undoes the .translate() used for cam scroll

    // doing this after .restore() so it won't scroll with the camera pan
    //canvasContext.fillStyle = 'white';
    //canvasContext.fillText("Arrow keys to slide, scrolling demo",8,14);
}

  
function brickTileToIndex(tileCol, tileRow) {
    return (tileCol + BRICK_COLS*tileRow);
}

function isBrickAtTileCoord(brickTileCol, brickTileRow) {
    var brickIndex = brickTileToIndex(brickTileCol, brickTileRow);
    return (levelGrid[brickIndex] == 1);
}
  
function isBrickAtPixelCoord(hitPixelX, hitPixelY) {
    var tileCol = hitPixelX / BRICK_W;
    var tileRow = hitPixelY / BRICK_H;
    
    // using Math.floor to round down to the nearest whole number
    tileCol = Math.floor( tileCol );
    tileRow = Math.floor( tileRow );

    // first check whether the slider is within any part of the brick wall
    if(tileCol < 0 || tileCol >= BRICK_COLS ||
       tileRow < 0 || tileRow >= BRICK_ROWS) {
       return false;
    }
    
    var brickIndex = brickTileToIndex(tileCol, tileRow);
    
    //console.log('brickIndex: '+brickIndex);
    
    return (levelGrid[brickIndex] == 1);
}


function drawBricksOnScreen() {
    
    var drawTileX = 0;
	var drawTileY = 0;
    
    // what are the top-left most col and row visible on canvas?
    var cameraLeftMostCol = Math.floor(camPanX / BRICK_W);
    var cameraTopMostRow = Math.floor(camPanY / BRICK_H);
    
    // how many columns and rows of tiles fit on one screenful of area?
    var colsThatFitOnScreen = Math.floor(canvas.width / BRICK_W);
    var rowsThatFitOnScreen = Math.floor(canvas.height / BRICK_H);
      
    //document.getElementById('colsThatFitOnScreen').innerHTML = colsThatFitOnScreen;
    //document.getElementById('rowsThatFitOnScreen').innerHTML = rowsThatFitOnScreen;

    // finding the rightmost and bottommost tiles to draw.
    if(camPanX > 0){
        var cameraRightMostCol = BRICK_COLS;
        cameraLeftMostCol = 0;
    }else{
        var cameraRightMostCol = cameraLeftMostCol + colsThatFitOnScreen;
    }    
    
    if(camPanY > 0){    
        var cameraBottomMostRow = BRICK_ROWS;
        cameraTopMostRow = 0;
    }else{
        var cameraBottomMostRow = cameraTopMostRow + rowsThatFitOnScreen;    
    }
    
    
      
    //document.getElementById('cameraRightMostCol').innerHTML = cameraRightMostCol;
    //document.getElementById('cameraBottomMostRow').innerHTML = cameraBottomMostRow;  
    //document.getElementById('cameraLeftMostCol').innerHTML = cameraLeftMostCol;
    //document.getElementById('cameraTopMostRow').innerHTML = cameraTopMostRow;
    
    
    for(var eachCol=cameraLeftMostCol; eachCol<cameraRightMostCol; eachCol++) {
      for(var eachRow=cameraTopMostRow; eachRow<cameraBottomMostRow; eachRow++) {
        
          var tileType = returnTileTypeAtColRow(eachCol,eachRow); 
          if(tileTypeHasTransparency(tileType)){
              canvasContext.drawImage(worldPics[TILE_GROUND],drawTileX,drawTileY);   
          }
          //Draw image with animation
          if(tileType == TILE_COIN){
              
              if(totalNumberOfAnimations > aniamtionsRun){
                  
                  console.log('create animation');
                  
                  // Create animation sprite
                  var coin = sprite({
                        context: canvasContext,
                        width: 500,
                        height: 50,
                        image: coinPic,
                        numberOfFrames: 10,
                        ticksPerFrame: 1,
                        atX: drawTileX,
                        atY: drawTileY
                    });
                  
                  animationsList.push(coin);
                  aniamtionsRun++;
                  
              }
              
          }else if(tileType == TILE_TRUMP_ANIMATED){
              
              if(totalNumberOfAnimations > aniamtionsRun){
                  
                  // Create animation STANDING
                  animatedTrumpSpriteStanding = sprite({
                        context: canvasContext,
                        width: 500,
                        height: 50,
                        image: trumpAnimatedStanding,
                        numberOfFrames: 10,
                        ticksPerFrame: 2,
                        atX: drawTileX,
                        atY: drawTileY
                    });
              }
              
          }else{
              canvasContext.drawImage(worldPics[tileType],drawTileX,drawTileY);      
          }
          drawTileY += BRICK_W;
          
      } // end of for eachRow
    drawTileX += BRICK_H;   
    drawTileY = 0;    
    } // end of for eachCol
} // end of drawBricks()


function returnTileTypeAtColRow(col, row) {
	if(col >= 0 && col < BRICK_COLS &&
		row >= 0 && row < BRICK_ROWS) {
		 var worldIndexUnderCoord = brickTileToIndex(col, row);
		 return levelGrid[worldIndexUnderCoord];
	} else {
		return TILE_WALL;
	}
}

function tileTypeHasTransparency(checkTileType) {
	return (checkTileType == TILE_GOAL ||
			checkTileType == TILE_KEY ||
			checkTileType == TILE_DOOR ||
            checkTileType == TILE_MONEY ||
            checkTileType == TILE_PUSSY ||
            checkTileType == TILE_FAME ||
            checkTileType == TILE_COIN ||
            checkTileType == TILE_TRUMP_ANIMATED ||
            checkTileType == TILE_GARBAGE_CAN ||
			checkTileType == TILE_BRIDGE);
}


function getTileIndexAtPixelCoord(atX, atY) {
	var warriorWorldCol = Math.floor(atX / BRICK_W);
	var warriorWorldRow = Math.floor(atY / BRICK_H);
	var worldIndexUnderWarrior = brickTileToIndex(warriorWorldCol, warriorWorldRow);

	if(warriorWorldCol >= 0 && warriorWorldCol < BRICK_COLS &&
		warriorWorldRow >= 0 && warriorWorldRow < BRICK_ROWS) {
		return worldIndexUnderWarrior;
	} // end of valid col and row

	return undefined;
} // end of warriorWorldHandling func


function isEnemyAtIndex(atX,atY){
    
    for( var i=0; i<enemyList.length; i++ ) {
        if(enemyList[i].x == atX && enemyList[i].y == atY){
            return true;
        }
    }
}

function isPlayerAtEnemyIndex(atX,atY){
   if(trump.x == atX && trump.y == atY){
       return true
   }
}

/*
* Trump hits coin
*/
function hitCoin(atX,atY){
    //Find coin in animationsList and remove
    for( var i=0; i<animationsList.length; i++ ) {
        //Plus x and y because the tile is animated
        if((animationsList[i].atX+25) == atX && (animationsList[i].atY+25) == atY){
            animationsList.splice(i,1);        
        }
    }    
}

/*
*   Enemy hits trump
*/
function hitTrump(directionHit){
    
    playAudio(BOMB);
    
    trump.move(directionHit);
    
    loosePoints();
}

/*
*   Trump hits enemy
*/
function hitEnemy(atX,atY){
    
    //Find enemy in enemyList and remove
    for( var i=0; i<enemyList.length; i++ ) {
        if(enemyList[i].x == atX && enemyList[i].y == atY){
            
            enemyList.splice(i,1);
            
            //Stop enemy moving
            for(var x=0;x<enemyTimeoutList[i].length;x++){
                clearTimeout(enemyTimeoutList[i][x]);
            }
            clearInterval(enemyIntervalList[i]);
        }
        
    }    
    
}

function hitGarbageCan(toX,toY,fromX,fromY){
    
    //Make random number 1-4
    var randNumber = Math.floor((Math.random() * 4) + 1);
    //Make coins
    makeCoin(randNumber,toX,toY);
}

/*
*   Spawn x coins at postion x,y
*/
function makeCoin(numberOfCoins,toX,toY){
    
    //Index 0 = LEFT
    //Index 1 = RIGHT
    //Index 2 = UP
    //Index 3 = DOWN
    var tileIndexes = [];
    
    //Index 0 = LEFT
    //Index 1 = RIGHT
    //Index 2 = UP
    //Index 3 = DOWN
    var toXtoY = [];
    
    //LEFT
    var tileIndexLeft = getTileIndexAtPixelCoord(toX-PLAYER_MOVE_SPEED,toY);
    tileIndexes.push(tileIndexLeft);
    toXtoY.push([toX-PLAYER_MOVE_SPEED,toY]);
        
    //RIGHT
    var tileIndexRight = getTileIndexAtPixelCoord(toX+PLAYER_MOVE_SPEED,toY);
    tileIndexes.push(tileIndexRight);
    toXtoY.push([toX+PLAYER_MOVE_SPEED,toY]);
    
    //UP
    var tileIndexUp = getTileIndexAtPixelCoord(toX,toY-PLAYER_MOVE_SPEED);
    tileIndexes.push(tileIndexUp);
    toXtoY.push([toX,toY-PLAYER_MOVE_SPEED]);
    
    //DOWN
    var tileIndexDown = getTileIndexAtPixelCoord(toX,toY+PLAYER_MOVE_SPEED);
    tileIndexes.push(tileIndexDown);
    toXtoY.push([toX,toY+PLAYER_MOVE_SPEED]);
    
    for( var i=0; i<numberOfCoins; i++ ) {
        
        //Get random tileIndex from tileIndexes
        var randNumber = Math.floor((Math.random() * 4) + 0);
        
        //Check if tileIndex is ground
        if(levelGrid[tileIndexes[randNumber]] == TILE_GROUND){
            
            levelGrid[tileIndexes[randNumber]] = TILE_COIN;
            
            var coin = sprite({
                    context: canvasContext,
                    width: 500,
                    height: 50,
                    image: coinPic,
                    numberOfFrames: 10,
                    ticksPerFrame: 1,
                    atX: toXtoY[randNumber][0]-25,
                    atY: toXtoY[randNumber][1]-25
            });

           animationsList.push(coin); 
        }    
   } 
}