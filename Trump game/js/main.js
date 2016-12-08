var canvas, canvasContext;


var trump = new Trump();
var enemy = new Enemy();


window.onload = function() {
    
    canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

    //Event listen for touch for button
    var btn = document.getElementById('startGameBtn');
    btn.addEventListener("touchend", StartGame, false);
    
	colorRect(0,0, canvas.width,canvas.height, 'black');
	colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'white');
    
    //Load all image assets
	loadImages();
    
    //Load all audio assets
    loadAllAudio();
    
    //So we can use the keybord for controls
    initInputForDebugging();
        
}
  

function StartGame(){
    
    document.getElementById('gameCanvas').setAttribute('style','display:block');
    document.getElementById('welcomeScreen').setAttribute('style','display:none');
    
    // these next few lines set up our game logic and render to happen 30 times per second
    var framesPerSecond = 30;
    setInterval(function() {
        moveEverything();
        drawEverything();
      }, 1000/framesPerSecond);
    
    //Load first level, and init trump and init enemies
    loadLevel('levelOne');
    
}

function audioLoadingDone(){
    console.info('Audio loading done: Show welcome screen!');
}

function imageLoadingDone() {
	document.getElementById('startGameBtn').removeAttribute('disabled');
}


function moveEverything() {   
    cameraFollow();
}
  

function drawEverything() {
    
    // drawing black to erase previous frame, doing before .translate() since
    // its coordinates are not supposed to scroll when the camera view does
    colorRect(0, 0, canvas.width, canvas.height, 'black');

    //Draw the world
    drawWorld();
    
    //Draw trump
    trump.draw();
    if(trump.isSpeaking){
        trump.speak('Grab them by the pussy!',2000);
    }
    
    //Draw enemies
    enemy.draw();
    
    //Draw points
    drawPoints();
    
    //Debugging with mouse
    //showBrickIndexWithMouse();
    
    //Run animations
    for(var i=0;animationsList.length > i; i++){
        
        animationsList[i].render();
        animationsList[i].update();
    }
    
}
