

const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;
var trackGrid = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                 1,0,0,0,5,1,1,1,1,1,1,1,1,1,1,5,0,0,0,1,
                 1,0,0,5,5,0,0,0,1,0,0,0,0,0,0,5,5,0,0,1,
                 4,0,0,4,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,
                 1,0,2,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,
                 1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,
                 1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,
                 1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,
                 1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,
                 1,0,0,0,0,3,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
                 1,0,0,0,0,3,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
                 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_GOAL = 3;
const TRACK_FLAG = 4;
const TRACK_TREE = 5;

function trackReset() {
	for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {

			var arrayIndex = rowColToArrayIndex(eachCol,eachRow);

			if(trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
                trackGrid[arrayIndex] = 0;
                carAng = -90 * Math.PI/180.0;
                carX = eachCol * TRACK_W + TRACK_W/2;
                carY = eachRow * TRACK_H + TRACK_H/2;
            }
        }
    }
}

function carTrackHandeling(){
    
    // Detech collision between car and track, and set track to false, and bounce car
    var carTrackCol = Math.floor(carX / TRACK_W);
	var carTrackRow = Math.floor(carY / TRACK_H);
    var trackIndexUnderCar = rowColToArrayIndex(carTrackCol,carTrackRow);  
    if( carTrackCol >= 0 &&
        carTrackCol < TRACK_COLS &&
        carTrackRow >= 0 &&
        carTrackRow < TRACK_ROWS){
        
        if(isObstacleAtColRow(carTrackCol,carTrackRow)){
            
            carX -= Math.cos(carAng) * carSpeed;
	        carY -= Math.sin(carAng) * carSpeed;
            carSpeed *= -0.5;
        }    
    }
     
}

function isObstacleAtColRow(col, row) {
	if(col >= 0 && col < TRACK_COLS &&
		row >= 0 && row < TRACK_ROWS) {
		 var trackIndexUnderCoord = rowColToArrayIndex(col, row);
		 return (trackGrid[trackIndexUnderCoord]);
	} else {
		return false;
	}
}

function drawTracks() {

	for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {

			var arrayIndex = rowColToArrayIndex(eachCol,eachRow);
            var tileKindHere = trackGrid[arrayIndex];
            var useImg = trackPics[tileKindHere];
            
            canvasContext.drawImage(useImg, TRACK_W*eachCol,TRACK_H*eachRow);
            
		} // end of for each track
	} // end of for each row

} // end of drawTracks func

function rowColToArrayIndex(col, row){
    return col + TRACK_COLS * row;  
}