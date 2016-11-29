var canvas, canvasContext;


var trump = new Trump();

window.onload = function() {
    
    canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	colorRect(0,0, canvas.width,canvas.height, 'black');
	colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'white');

	loadImages();
}
  

function imageLoadingDoneSoStartGame() {
	
    //So we can use the keybord for controls
    initInputForDebugging();
    
    // these next few lines set up our game logic and render to happen 30 times per second
    var framesPerSecond = 30;
    setInterval(function() {
        moveEverything();
        drawEverything();
      }, 1000/framesPerSecond);
    
    
    //Load level by copying the current level to worldGrid array
    worldGrid = brickGrid.slice();
    
    //Reset Trump
    trump.reset(warriorPic, "Mr. D. Trump");
}
  
function moveEverything() {
    
    cameraFollow();
}
  

function drawEverything() {
    
    // drawing black to erase previous frame, doing before .translate() since
    // its coordinates are not supposed to scroll when the camera view does
    colorRect(0, 0, canvas.width, canvas.height, 'black');

    
    drawWorld();
    trump.draw();
    
    //Debugging with mouse
    showBrickIndexWithMouse();
    
}