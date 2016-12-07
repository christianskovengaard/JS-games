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
        console.error('TODO: Refactor code don\'t repeat yourself! ');
        
        var intervalId;
        var timeoutId;
        
        if(route == 0){
                
                /*
                setTimeout(function(){
                    //UP
                    enemy.y += -ENEMY_MOVE_SPEED;
                    if (isPlayerAtEnemyIndex(enemy.x,enemy.y)) hitTrump('UP');
                },1000)

                setTimeout(function(){ 
                    //LEFT
                    enemy.x += -ENEMY_MOVE_SPEED; 
                    if (isPlayerAtEnemyIndex(enemy.x,enemy.y)) hitTrump('LEFT');
                },2000)

                setTimeout(function(){
                    //DOWN
                    enemy.y += ENEMY_MOVE_SPEED;
                    if (isPlayerAtEnemyIndex(enemy.x,enemy.y)) hitTrump('DOWN');
                },3000)

                setTimeout(function(){
                    //RIGHT
                    enemy.x += ENEMY_MOVE_SPEED; 
                    if (isPlayerAtEnemyIndex(enemy.x,enemy.y)) hitTrump('RIGHT');

                },4000)*/
                    
           intervalId = setInterval(function(){
                    
                enemyIntervalList.splice(route, 1);
                enemyIntervalList.splice(route, 0, intervalId);

                var timeoutList = [];

                timeoutId = setTimeout(function(){
                    //UP
                    enemy.y += -ENEMY_MOVE_SPEED;
                    if (isPlayerAtEnemyIndex(enemy.x,enemy.y)) hitTrump('UP');
                },1000)

                timeoutList.push(timeoutId);

                enemyTimeoutList.splice(route, 1);
                enemyTimeoutList.splice(route,0,timeoutList);

                timeoutId = setTimeout(function(){ 
                    //LEFT
                    enemy.x += -ENEMY_MOVE_SPEED; 
                    if (isPlayerAtEnemyIndex(enemy.x,enemy.y)) hitTrump('LEFT');
                },2000)

                timeoutList.push(timeoutId);

                enemyTimeoutList.splice(route, 1);
                enemyTimeoutList.splice(route,0,timeoutList);

                timeoutId = setTimeout(function(){
                    //DOWN
                    enemy.y += ENEMY_MOVE_SPEED;
                    if (isPlayerAtEnemyIndex(enemy.x,enemy.y)) hitTrump('DOWN');
                },3000)

                timeoutList.push(timeoutId);

                enemyTimeoutList.splice(route, 1);
                enemyTimeoutList.splice(route,0,timeoutList);

                timeoutId = setTimeout(function(){
                    //RIGHT
                    enemy.x += ENEMY_MOVE_SPEED; 
                    if (isPlayerAtEnemyIndex(enemy.x,enemy.y)) hitTrump('RIGHT');
                },4000)

                timeoutList.push(timeoutId);

                enemyTimeoutList.splice(route, 1);
                enemyTimeoutList.splice(route,0,timeoutList);

           }, 4000);          
                
               
        }    
        
        else if(route == 1){
          intervalId = setInterval(function(){
                
               enemyIntervalList.splice(route, 1);
               enemyIntervalList.splice(route, 0, intervalId);
              
               var timeoutList = [];   
              
                timeoutId = setTimeout(function(){      
                    //LEFT
                    enemy.x += -ENEMY_MOVE_SPEED; 
                    if (isPlayerAtEnemyIndex(enemy.x,enemy.y)) hitTrump('LEFT');
                },1000)
                
                timeoutList.push(timeoutId);
                    
                enemyTimeoutList.splice(route, 1);
                enemyTimeoutList.splice(route,0,timeoutList);

                timeoutId = setTimeout(function(){ 
                    //UP
                    enemy.y += -ENEMY_MOVE_SPEED;
                    if (isPlayerAtEnemyIndex(enemy.x,enemy.y)) hitTrump('UP');
                },2000)
                
                timeoutList.push(timeoutId);
                    
                enemyTimeoutList.splice(route, 1);
                enemyTimeoutList.splice(route,0,timeoutList);

                timeoutId = setTimeout(function(){
                     //RIGHT
                    enemy.x += ENEMY_MOVE_SPEED;
                    if (isPlayerAtEnemyIndex(enemy.x,enemy.y)) hitTrump('RIGHT');
                },3000)

                timeoutId = setTimeout(function(){
                   //DOWN
                    enemy.y += ENEMY_MOVE_SPEED; 
                    if (isPlayerAtEnemyIndex(enemy.x,enemy.y)) hitTrump('DOWN');
                },4000)
                
                timeoutList.push(timeoutId);
                    
                enemyTimeoutList.splice(route, 1);
                enemyTimeoutList.splice(route,0,timeoutList);

            }, 4600);
        }
        
        else {
           setInterval(function(){

                setTimeout(function(){
                    
                    //LEFT
                    enemy.x += -ENEMY_MOVE_SPEED; 
                    isPlayerAtEnemyIndex(enemy.x,enemy.y);
                },1000)

                setTimeout(function(){
                     //RIGHT
                    enemy.x += ENEMY_MOVE_SPEED; 
                    isPlayerAtEnemyIndex(enemy.x,enemy.y);
                },3000)


            }, 3000); 
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