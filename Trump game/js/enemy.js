const ENEMY_MOVE_SPEED = 50.0;


var enemyTotalNumberStart = 0;

var enemyList = [];
    

function Enemy() {
    
    this.x;
	this.y;
	this.enemyPic; // which picture to use
    
       
    this.init = function(){
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
        
        
        if(route == 0){
                
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

                },4000)
                    
            setInterval(function(){

                    runFirstTime = false;

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

                    },4000)

                }, 4000);          
                
               
        }    
        
        else if(route == 1){
            setInterval(function(){

                setTimeout(function(){      
                    //LEFT
                    enemy.x += -ENEMY_MOVE_SPEED; 
                    if (isPlayerAtEnemyIndex(enemy.x,enemy.y)) hitTrump('LEFT');
                },1000)

                setTimeout(function(){ 
                    //UP
                    enemy.y += -ENEMY_MOVE_SPEED;
                    if (isPlayerAtEnemyIndex(enemy.x,enemy.y)) hitTrump('UP');
                },2000)

                setTimeout(function(){
                     //RIGHT
                    enemy.x += ENEMY_MOVE_SPEED;
                    if (isPlayerAtEnemyIndex(enemy.x,enemy.y)) hitTrump('RIGHT');
                },3000)

                setTimeout(function(){
                   //DOWN
                    enemy.y += ENEMY_MOVE_SPEED; 
                    if (isPlayerAtEnemyIndex(enemy.x,enemy.y)) hitTrump('DOWN');
                },4000)

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
            
            var newX = enemyList[i].x;
            var newY = enemyList[i].y;

            //Check for if canvas has scrolled on X-axis
            if(camPanX > 0 && camPanY == 0){
                //Redraw the amount the canvas has scrolled from the players position
                newX = enemyList[i].x - camPanX;
            } else if(camPanX == 0  && camPanY > 0){
                newY = enemyList[i].y - camPanY;
            } else if(camPanX > 0 && camPanY > 0){
                newX = enemyList[i].x - camPanX;
                newY = enemyList[i].y - camPanY;
            }

            drawBitmapCenteredWithRotation(enemyList[i].enemyPic, newX,newY, 0);   
        }
        
    }
    
}