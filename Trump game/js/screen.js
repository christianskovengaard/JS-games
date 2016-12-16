function nextLevelScreenShow(){
    
    //Hide game
    document.getElementById('gameCanvas').setAttribute('style','display:none');    
    //Show screen
    document.getElementById('levelScreen').setAttribute('style','display:block');
    
}

function nextLevelScreenHide(){  
    //Show screen
    document.getElementById('levelScreen').setAttribute('style','display:none');
}


function hideWelcomeScreen(){
    document.getElementById('gameCanvas').setAttribute('style','display:block');
    document.getElementById('welcomeScreen').setAttribute('style','display:none');
}


function showGameCanvas(){
   document.getElementById('gameCanvas').setAttribute('style','display:block'); 
}