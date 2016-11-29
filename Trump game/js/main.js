var canvas, canvasContext;


var trump = new Trump();
var enemy_red = new Enemy();
var enemy_yellow = new Enemy();

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
    
    //Load first level
    loadLevel(levelOne);
    
    //init Trump
    trump.init(warriorPic, "Mr. D. Trump");
    
    //init enemy
    enemy_red.init(enemyPic_red);
    enemy_yellow.init(enemyPic_yellow);
    
    enemy_red.move(enemy_red,1);
    enemy_yellow.move(enemy_yellow,2);
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
    
    //Draw enemy
    enemy_red.draw(enemy_red);
    enemy_yellow.draw(enemy_yellow);
    
    //Debugging with mouse
    showBrickIndexWithMouse();
    
}