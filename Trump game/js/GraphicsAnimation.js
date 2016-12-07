
//Aniamtion sprites
var animationsList = []
var totalNumberOfAnimations = 0;
var aniamtionsRun = 0;

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
    
      var atXatY = hasCameraScrolled(that.atX,that.atY); 
        
      // Draw the animation
      that.context.drawImage(
        that.image, // Source image object (Sprite sheet)
        frameIndex * that.width / numberOfFrames, // Source x (Frame index times frame width)
        0, // Source y
        that.width / numberOfFrames, // Source width (Frame width)
        that.height, // Source height (Frame height)
        atXatY[0],//that.atX, // position x
        atXatY[1], //that.atY, // position y
        that.width / numberOfFrames, // Destination width (Frame width)
        that.height); //Destination height (Frame height)
    };

    return that;
}
    
