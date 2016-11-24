const TILE_GROUND = 0;
const TILE_WALL = 1;
const TILE_PLAYERSTART = 2;
const TILE_GOAL = 3;
const TILE_KEY = 4;
const TILE_DOOR = 5;

const BRICK_W = 50;
const BRICK_H = 50;
const BRICK_GAP = 2;
const BRICK_COLS = 20;
const BRICK_ROWS = 15;

/*
const WORLD_W = 50;
const WORLD_H = 50;
const WORLD_GAP = 2;
const WORLD_COLS = 20;
const WORLD_ROWS = 15;
*/
  var brickGrid =
      [ 1, 3, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
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
 
var worldGrid = [];
  
function drawWorld(){
    
    canvasContext.save(); // needed to undo this .translate() used for scroll

    // this next line is like subtracting camPanX and camPanY from every
    // canvasContext draw operation up until we call canvasContext.restore
    // this way we can just draw them at their "actual" position coordinates
    canvasContext.translate(-camPanX,-camPanY);


    drawOnlyBricksOnScreen();
    
    colorCircle(sliderX, sliderY, 10, 'white');

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
    return (brickGrid[brickIndex] == 1);
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
    return (brickGrid[brickIndex] == 1);
}


function drawOnlyBricksOnScreen() {
    
    
    var drawTileX = 0;
	var drawTileY = 0;   
    var useImg;
    
    // what are the top-left most col and row visible on canvas?
    var cameraLeftMostCol = Math.floor(camPanX / BRICK_W);
    var cameraTopMostRow = Math.floor(camPanY / BRICK_H);

    // how many columns and rows of tiles fit on one screenful of area?
    var colsThatFitOnScreen = Math.floor(canvas.width / BRICK_W);
    var rowsThatFitOnScreen = Math.floor(canvas.height / BRICK_H);

    // finding the rightmost and bottommost tiles to draw.
    // the +1 and + 2 on each pushes the new tile popping in off visible area
    // +2 for columns since BRICK_W doesn't divide evenly into canvas.width
    var cameraRightMostCol = cameraLeftMostCol + colsThatFitOnScreen + 2;
    var cameraBottomMostRow = cameraTopMostRow + rowsThatFitOnScreen + 1;
    
    for(var eachCol=cameraLeftMostCol; eachCol<cameraRightMostCol; eachCol++) {
      for(var eachRow=cameraTopMostRow; eachRow<cameraBottomMostRow; eachRow++) {
        
          var tileType = returnTileTypeAtColRow(eachCol,eachRow);  
          console.log('tiletype: '+tileType);
          
          if(tileType == 0){
              useImg = TILE_GROUND;
          } else if(tileType == 1){
              useImg = TILE_WALL;
          } else if(tileType == 2){
              useImg = TILE_PLAYERSTART;
          } else if(tileType == 3){
              useImg = TILE_GOAL;
          } else if(tileType == 4){
              useImg = TILE_KEY;
          } else if(tileType == 5){
              useImg = TILE_DOOR;
          }
          
          canvasContext.drawImage(worldPics[tileType],drawTileX,drawTileY);      
          
          drawTileX += BRICK_W;  
          
        /*  
        if( isBrickAtTileCoord(eachCol, eachRow) ) {
          var brickLeftEdgeX = eachCol * BRICK_W;
          var brickTopEdgeY = eachRow * BRICK_H;
            //console.log('brickLeftEdgeX: '+brickLeftEdgeX);
            //console.log('brickTopEdgeY: '+brickTopEdgeY);
            canvasContext.drawImage(worldPics[TILE_GROUND],drawTileX,drawTileY);
          //colorRect(brickLeftEdgeX, brickTopEdgeY,BRICK_W - BRICK_GAP, BRICK_H - BRICK_GAP, 'blue' );
        } // end of isBrickAtTileCoord()
        */
          
      } // end of for eachRow
    drawTileY += BRICK_H;   
    drawTileX = 0;    
    } // end of for eachCol
} // end of drawBricks()


function returnTileTypeAtColRow(col, row) {
	if(col >= 0 && col < BRICK_COLS &&
		row >= 0 && row < BRICK_ROWS) {
		 var worldIndexUnderCoord = brickTileToIndex(col, row);
		 return worldGrid[worldIndexUnderCoord];
	} else {
		return TILE_WALL;
	}
}