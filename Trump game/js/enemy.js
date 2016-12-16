const ENEMY_MOVE_SPEED = 50.0;


//This value is set in world.js when loading level
var enemyTotalNumberStart = 0;

var enemyList = [];
    
var enemyIntervalList = [];
var enemyTimeoutList = [];

function Enemy() {
    
    this.x;
	this.y;
	this.enemyPic; // which picture to use
    
       
    this.init = function(){
        
        //Clear timeout for enemies
        for(var x=0;x<enemyTimeoutList.length;x++){
           for(var i=0;i<enemyTimeoutList[x].length;i++){
                clearTimeout(enemyTimeoutList[x][i]);
           }
        }
        //Clear timeout for enemies
        for(var i=0;i<enemyTimeoutList.length;i++){
            clearInterval(enemyIntervalList[i]);    
        }
        
        //Clear enemies
        enemyList = [];
        enemyIntervalList = [];
        enemyTimeoutList = [];
        
        //Draw x-number of enemies
        for(var i=0;i<enemyTotalNumberStart;i++){
            this.create();
        }
        
        //Move all enemies
        this.move();
    }
    
    this.create = function(){
        
		this.enemyPic = enemyPic_red;
        var enemy = {};
	 
        for(var eachRow=0;eachRow<BRICK_ROWS;eachRow++) {
            for(var eachCol=0;eachCol<BRICK_COLS;eachCol++) {
                var arrayIndex = brickTileToIndex(eachCol, eachRow); 
                if(levelGrid[arrayIndex] == TILE_ENEMYSTART) {
                    levelGrid[arrayIndex] = TILE_GROUND;
                    this.x = eachCol * BRICK_W + BRICK_W/2;
                    this.y = eachRow * BRICK_H + BRICK_H/2;
                    //Push enemies to enemyList
                    enemy.x = this.x;
                    enemy.y = this.y;
                    enemy.enemyPic = this.enemyPic;
                    enemyList.push(enemy);
                    return;
                } // end of player start if
            } // end of col for
        } // end of row for
        console.warn("NO ENEMY START FOUND OR WRONG NUMBER OF ENMIES SET!");
        
        
    }
    
    this.move = function(){
        
        for( var i=0; i<enemyList.length; i++ ) {
            this.moveSingle(enemyList[i],i);
        }  
        
    }
    
    
    
    this.moveSingle = function(enemy,route){
        
        console.info('move enemy');
        
        var intervalId;
        
        var intervalTime = 2000+(route*100);
        
        if(route >= 0){
            
          intervalId = setInterval(function(){
                    
                enemyIntervalList.splice(route, 1);
                enemyIntervalList.splice(route, 0, intervalId);

                var timeoutList = []; 
               
                //New dynamic route handeling
                dynamicRoute(enemy,route,timeoutList);
               
           }, intervalTime);      
        }else{
            console.error('No route for enemy defined!')
            console.info(enemy);  
        }               
    }
    
    
    this.draw = function(){
        
        //Draw enmies in enemyList
        for( var i=0; i<enemyList.length; i++ ) {
            
            var atXatY = hasCameraScrolled(enemyList[i].x,enemyList[i].y);
            
            drawBitmapCenteredWithRotation(enemyList[i].enemyPic, atXatY[0],atXatY[1], 0);   
        }
        
    }
    
}

/*
*   Move enemy randomly up,down,left,right
*/
function dynamicRoute(enemy,route,timeoutList){
    
    //Random 1 ==  up, 2 == down, 3 == left, 4 == right
    var randNumber = Math.floor((Math.random() * 4) + 1);
    
    var newX = enemy.x;
    var newY = enemy.y;
    
    
    if(randNumber == 1){
        //UP
        newY += -ENEMY_MOVE_SPEED;    
    }
    if(randNumber == 2){
        //DOWN
        newY += ENEMY_MOVE_SPEED;
    }
    if(randNumber == 3){
        //LEFT
        newX += -ENEMY_MOVE_SPEED; 
    }
    if(randNumber == 4){
        //RIGHT
        newX += ENEMY_MOVE_SPEED; 
    }

    //Check for TILE_GROUND    
    var tileIndex = getTileIndexAtPixelCoord(newX,newY);  
    if(levelGrid[tileIndex] == TILE_GROUND){
        
        if(randNumber == 1){
          enemyMoveRoute(enemy,route,'UP',1000,timeoutList);  
        } 
        if(randNumber == 2){
          enemyMoveRoute(enemy,route,'DOWN',1000,timeoutList);  
        }
        if(randNumber == 3){
          enemyMoveRoute(enemy,route,'LEFT',1000,timeoutList);  
        }
        if(randNumber == 4){
          enemyMoveRoute(enemy,route,'RIGHT',1000,timeoutList);  
        }
        
    }else{
        //Call again to move enemy
        dynamicRoute(enemy,route,timeoutList);
    }
       
}

function enemyMoveRoute(enemy,route,direction,timeToWait,timeoutList){
         
        timeoutId = setTimeout(function(){
            
                    if(direction == 'UP'){
                        //UP
                        enemy.y += -ENEMY_MOVE_SPEED;    
                    }
                    if(direction == 'DOWN'){
                        //DOWN
                        enemy.y += ENEMY_MOVE_SPEED;
                    }
                    if(direction == 'LEFT'){
                        //LEFT
                        enemy.x += -ENEMY_MOVE_SPEED; 
                    }
                    if(direction == 'RIGHT'){
                        //RIGHT
                        enemy.x += ENEMY_MOVE_SPEED; 
                    }
                    
                    if(isPlayerAtEnemyIndex(enemy.x,enemy.y)) hitTrump(direction);
        },timeToWait)

        timeoutList.push(timeoutId);

        enemyTimeoutList.splice(route, 1);
        enemyTimeoutList.splice(route,0,timeoutList);
        
}