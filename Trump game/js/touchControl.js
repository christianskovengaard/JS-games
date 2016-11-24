document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {
    
    //prevent scroll on page
    evt.preventDefault();
    
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            blueWarrior.move('LEFT');
        } else {
            /* right swipe */
            blueWarrior.move('RIGHT');
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
            blueWarrior.move('UP');
        } else { 
            /* down swipe */
            blueWarrior.move('DOWN');
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};