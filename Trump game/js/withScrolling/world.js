const TILE_GROUND = 0;
const TILE_WALL = 1;
const TILE_PLAYERSTART = 2;
const TILE_GOAL = 3;
const TILE_KEY = 4;
const TILE_DOOR = 5;
const TILE_BRIDGE = 6;

const BRICK_W = 50;
const BRICK_H = 50;
const BRICK_GAP = 2;
const BRICK_COLS = 20;
const BRICK_ROWS = 15;

  var brickGrid =
      [ 1, 6, 1, 3, 1, 4, 1, 5, 1, 4, 1, 3, 1, 5, 1, 3, 1, 4, 1, 6,
        5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        5, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
        1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1,
        5, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
        5, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
        5, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1,
        5, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
        5, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 
var worldGrid = [];
  
function drawWorld(){
    
    canvasContext.save(); // needed to undo this .translate() used for scroll

    // this next line is like subtracting camPanX and camPanY from every
    // canvasContext draw operation up until we call canvasContext.restore
    // this way we can just draw them at their "actual" position coordinates
    canvasContext.translate(-camPanX,-camPanY);


    drawOnlyBricksOnScreen();
    

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
    
    console.log('brickIndex: '+brickIndex);
    
    return (brickGrid[brickIndex] == 1);
}


function drawOnlyBricksOnScreen() {
    
    
    var drawTileX = 0;
	var drawTileY = 0;
    var oldHTML;
    
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
    
    
    
      
    document.getElementById('cameraRightMostCol').innerHTML = cameraRightMostCol;
    document.getElementById('cameraBottomMostRow').innerHTML = cameraBottomMostRow;
    
    document.getElementById('cameraLeftMostCol').innerHTML = cameraLeftMostCol;
    document.getElementById('cameraTopMostRow').innerHTML = cameraTopMostRow;
    
    
    for(var eachCol=cameraLeftMostCol; eachCol<cameraRightMostCol; eachCol++) {
      for(var eachRow=cameraTopMostRow; eachRow<cameraBottomMostRow; eachRow++) {
        
          var tileType = returnTileTypeAtColRow(eachCol,eachRow);  
          //console.log('tiletype: '+tileType);
          canvasContext.drawImage(worldPics[tileType],drawTileX,drawTileY);      
          
          drawTileY += BRICK_W;  
          
          //oldHTML = document.getElementById('XY').innerHTML;
          //oldHTML = oldHTML+' -> X:'+drawTileX+' Y:'+drawTileY+' Tile:'+tileType;
          //document.getElementById('XY').innerHTML = oldHTML;

          
      } // end of for eachRow
    drawTileX += BRICK_H;   
    drawTileY = 0;    
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