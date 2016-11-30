
const PUSSY_POINT_VALUE = 1;
const MONEY_POINT_VALUE = 1;
const FAME_POINT_VALUE = 1;

const PUSSY_POINT = 'PUSSY_POINT';
const MONEY_POINT = 'MONEY_POINT';
const FAME_POINT = 'FAME_POINT';

function gainPoints(pointType){
    
    if(pointType == PUSSY_POINT){
        pussyPointsTotal += PUSSY_POINT_VALUE;
    }
    if(pointType == MONEY_POINT){
        moneyPointsTotal += MONEY_POINT_VALUE;
    }
    if(pointType == FAME_POINT){
        famePointsTotal += FAME_POINT_VALUE;
    }
    
    calculateEgo();
    
}

function loosePoints(){
    
    famePointsTotal -= FAME_POINT_VALUE;
    moneyPointsTotal -= MONEY_POINT_VALUE;
    pussyPointsTotal -= PUSSY_POINT_VALUE;
    
    calculateEgo();
    
}

function calculateEgo(){
    egoPointsTotal = famePointsTotal + moneyPointsTotal + pussyPointsTotal;
}


function drawPoints(){
    colorTextBig('Total ego: '+egoPointsTotal,50,180,'yellow');
    colorTextBig('Pussy: '+pussyPointsTotal,50,200,'yellow');
    colorTextBig('Money: '+moneyPointsTotal,50,220,'yellow');
    colorTextBig('Fame: '+famePointsTotal,50,240,'yellow');
}