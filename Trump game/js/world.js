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

const BRICK_W = 50;
const BRICK_H = 50;

//const BRICK_COLS = 20;
//const BRICK_ROWS = 15;

var BRICK_COLS = 20;
var BRICK_ROWS = 15;


var levelOne =
      [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 10, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 0, 2, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 7, 0, 0, 0, 1, 0, 0, 0, 1,
        1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1,
        1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 1, 0, 0, 0, 7, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 1, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


var levelTwo =
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

 
var levelGrid = [];
  

function loadLevel(whichLevel,levelName){
    
    
    /*if(levelName == 'LevelTwo'){
        BRICK_COLS = 20;
        BRICK_ROWS = 15;    
    }*/
    
    //Set number of enemies
    enemyTotalNumberStart = 3;
    
    //Load level by copying the current level to levelGrid array
    levelGrid = whichLevel.slice();
    
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
          canvasContext.drawImage(worldPics[tileType],drawTileX,drawTileY);      
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

function hitTrump(directionHit){
        
    var nextX = trump.x;
    var nextY = trump.y;

    //Player loses life and bounces back
    if(directionHit == 'RIGHT') {
      nextX += PLAYER_MOVE_SPEED;
    }
    if(directionHit == 'LEFT') {
      nextX += -(PLAYER_MOVE_SPEED);
    }
    if(directionHit == 'DOWN') {
      nextY += PLAYER_MOVE_SPEED;
    }
    if(directionHit == 'UP') {
      nextY += -(PLAYER_MOVE_SPEED);
    }
    
    //TODO: Check if trump walk into wall
    console.error('TODO: Check if trump walk into wall!');
    
    trump.x = nextX;
    trump.y = nextY;
    sliderX = nextX;
    sliderY = nextY;
    
    loosePoints();
}


function hitEnemy(atX,atY){
    //Kill enemy and gain points/pussy/money/fame
    
    //Find enemy in enemyList
    for( var i=0; i<enemyList.length; i++ ) {
        if(enemyList[i].x == atX && enemyList[i].y && atY){
            enemyList.splice(i,1);
        }
    }
    
    
}