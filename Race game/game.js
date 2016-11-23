
var canvas, canvasContext;


window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
    
    colorRect(0,0, canvas.width,canvas.height,'black');
    
    colorText('Loading game!',canvas.width/2,canvas.height/2,'white');
    
    loadImages();
    
}

function imageLoadingDoneSoStartGame(){
    
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

	setupInput();
	trackReset();
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
    carTrackHandeling();
    carMove();   
}


function drawAll() {
    
	drawTracks();
    drawCar();

	/*var mouseTrackCol = Math.floor(mouseX / TRACK_W);
	var mouseTrackRow = Math.floor(mouseY / TRACK_H);
    var TRACKIndexUnderMouse = rowColToArrayIndex(mouseTrackCol,mouseTrackRow);*/
	//colorText(mouseTrackCol+","+mouseTrackRow+":"+trackIndexUnderMouse, mouseX, mouseY, 'yellow');
}