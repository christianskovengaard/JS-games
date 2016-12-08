var warriorPic = document.createElement("img");
var enemyPic_red = document.createElement("img");
var enemyPic_yellow = document.createElement("img");
var speakBubble = document.createElement("img");
var coinPic = document.createElement("img");
                  

var worldPics = [];

var picsToLoad = 0; // set automatically based on imageList in loadImages()

function countLoadedImagesAndLaunchIfReady() {
	picsToLoad--;
	if(picsToLoad == 0) {
		imageLoadingDone();
	}
}

function beginLoadingImage(imgVar, fileName) {
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = "images/"+fileName;
}

function loadImageForWorldCode(worldCode, fileName) {
	worldPics[worldCode] = document.createElement("img");
	beginLoadingImage(worldPics[worldCode], fileName);
}

function loadImages() {
	var imageList = [
		{varName: warriorPic, theFile: "warrior.png"},
        {varName: enemyPic_red, theFile: "enemy_red.png"},
        {varName: enemyPic_yellow, theFile: "enemy_yellow.png"},
        {varName: speakBubble, theFile: "speakbubble.png"},
        {varName: coinPic, theFile: "coin.png"},

        
        {worldType: TILE_BUILDING_1, theFile: "bygning1.png"},
        {worldType: TILE_BUILDING_2, theFile: "bygning2.png"},
        {worldType: TILE_BUILDING_3, theFile: "bygning3.png"},
        {worldType: TILE_BUILDING_4, theFile: "bygning4.png"},
        
		{worldType: TILE_GROUND, theFile: "world_ground.png"},
		{worldType: TILE_WALL, theFile: "world_wall.png"},
		{worldType: TILE_GOAL, theFile: "world_goal.png"},
		{worldType: TILE_KEY, theFile: "world_key.png"},
		{worldType: TILE_DOOR, theFile: "world_door.png"},
        {worldType: TILE_BRIDGE, theFile: "world_bridge.png"},
        {worldType: TILE_AIR, theFile: "world_air.png"},
        {worldType: TILE_MONEY, theFile: "money.png"},
        {worldType: TILE_FAME, theFile: "fame.png"},
        {worldType: TILE_PUSSY, theFile: "pussy.png"},
        {worldType: TILE_COIN, theFile: "coin.png"}
		];

	picsToLoad = imageList.length;

	for(var i=0;i<imageList.length;i++) {
		if(imageList[i].varName != undefined) {
			beginLoadingImage(imageList[i].varName, imageList[i].theFile);
		} else {
			loadImageForWorldCode(imageList[i].worldType, imageList[i].theFile);
		}
	}
}