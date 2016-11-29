const ENEMY_MOVE_SPEED = 50.0;

function Enemy() {
    
    this.x;
	this.y;
	this.enemyPic; // which picture to use
    
    
    this.init = function(whichImage){
    
		this.enemyPic = whichImage;
		
		
		for(var eachRow=0;eachRow<BRICK_ROWS;eachRow++) {
			for(var eachCol=0;eachCol<BRICK_COLS;eachCol++) {
				var arrayIndex = brickTileToIndex(eachCol, eachRow); 
				if(levelGrid[arrayIndex] == TILE_ENEMYSTART) {
					levelGrid[arrayIndex] = TILE_GROUND;
					this.x = eachCol * BRICK_W + BRICK_W/2;
					this.y = eachRow * BRICK_H + BRICK_H/2;
					return;
				} // end of player start if
			} // end of col for
		} // end of row for
		console.log("NO ENEMY START FOUND!");
        
    }
    
    
    this.move = function(enemy,route){
        
        console.info('move enemy');
        
        if(route == 1){
            setInterval(function(){

                setTimeout(function(){
                    //UP
                    enemy.y += -ENEMY_MOVE_SPEED;
                },1000)

                setTimeout(function(){ 
                    //LEFT
                    enemy.x += -ENEMY_MOVE_SPEED; 
                },2000)

                setTimeout(function(){
                    //DOWN
                    enemy.y += ENEMY_MOVE_SPEED; 
                },3000)

                setTimeout(function(){
                    //RIGHT
                    enemy.x += ENEMY_MOVE_SPEED; 
                },4000)

            }, 4000);       
        }    
        
        if(route == 2){
            setInterval(function(){

                setTimeout(function(){
                    
                    //LEFT
                    enemy.x += -ENEMY_MOVE_SPEED; 
                },1000)

                setTimeout(function(){ 
                    //UP
                    enemy.y += -ENEMY_MOVE_SPEED;
                },2000)

                setTimeout(function(){
                     //RIGHT
                    enemy.x += ENEMY_MOVE_SPEED; 
                },3000)

                setTimeout(function(){
                   //DOWN
                    enemy.y += ENEMY_MOVE_SPEED; 
                },4000)

            }, 4600);
        }
        
               
    }
    
    
    this.draw = function(enemy){
        
        //drawBitmapCenteredWithRotation(this.enemyPic, enemy.x,enemy.y, 0);
        
        
         //Check for if canvas has scrolled on X-axis
        if(camPanX > 0 && camPanY == 0){
            //Redraw the amount the canvas has scrolled from the players position
            newX = enemy.x - camPanX;
            drawBitmapCenteredWithRotation(this.enemyPic, newX,enemy.y, 0);       
        } else if(camPanX == 0  && camPanY > 0){
            newY = enemy.y - camPanY;
            drawBitmapCenteredWithRotation(this.enemyPic, enemy.x,newY, 0);       
        } else if(camPanX > 0 && camPanY > 0){
            newX = enemy.x - camPanX;
            newY = enemy.y - camPanY;
            drawBitmapCenteredWithRotation(this.enemyPic, newX,newY, 0);
        }else{
            drawBitmapCenteredWithRotation(this.enemyPic, enemy.x,enemy.y, 0);        
        }
        
        
    }
    
}