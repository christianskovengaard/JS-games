
var canvas, canvasContext;

var blueCar = new Car();
var greenCar = new Car();

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
    
    loadLevel(levelOne);
    
}

function loadLevel(whichLevel){
    
    trackGrid = whichLevel.slice();
    
    greenCar.carReset(carPic2,'Groenne lyn');
	blueCar.carReset(carPic,'Blå banan');
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
    //carTrackHandeling(blueCar);
    greenCar.carMove();   
    blueCar.carMove();   
}


function drawAll() {
    
	drawTracks();
    greenCar.drawCar();   
    blueCar.drawCar();

	/*var mouseTrackCol = Math.floor(mouseX / TRACK_W);
	var mouseTrackRow = Math.floor(mouseY / TRACK_H);
    var TRACKIndexUnderMouse = rowColToArrayIndex(mouseTrackCol,mouseTrackRow);*/
	//colorText(mouseTrackCol+","+mouseTrackRow+":"+trackIndexUnderMouse, mouseX, mouseY, 'yellow');
}