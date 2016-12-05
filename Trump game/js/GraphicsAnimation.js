
function sprite (options) {

    var that = {},
        atX = options.atX,
        atY = options.atY,
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0,
        numberOfFrames = options.numberOfFrames || 1;

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    that.atX = options.atX;
    that.atY = options.atY;

    that.update = function () {

        tickCount += 1;

        if (tickCount > ticksPerFrame) {

            tickCount = 0;

            // If the current frame index is in range
            if (frameIndex < numberOfFrames - 1) {	
                // Go to the next frame
                frameIndex += 1;
            } else {
                frameIndex = 0;
            }
        }
    };

    that.render = function () {
        
        
        var newX = that.atX;
        var newY = that.atY;
        
        //Check for if canvas has scrolled on X-axis or Y-axis
        if(camPanX > 0 && camPanY == 0){
            //Redraw the amount the canvas has scrolled from the players position
            newX = that.atX - camPanX;
        } else if(camPanX == 0  && camPanY > 0){
            newY = that.atY - camPanY;
        } else if(camPanX > 0 && camPanY > 0){
            newX = that.atX - camPanX;
            newY = that.atY - camPanY;
        }    
        
        
        
      // Draw the animation
      that.context.drawImage(
        that.image, // Source image object (Sprite sheet)
        frameIndex * that.width / numberOfFrames, // Source x (Frame index times frame width)
        0, // Source y
        that.width / numberOfFrames, // Source width (Frame width)
        that.height, // Source height (Frame height)
        newX,//that.atX, // position x
        newY, //that.atY, // position y
        that.width / numberOfFrames, // Destination width (Frame width)
        that.height); //Destination height (Frame height)
    };

    return that;
}
    
