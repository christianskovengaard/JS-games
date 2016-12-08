 

const A_LOSER = 1;
const BARACK_OBAMA = 2;
const RICH = 3;
const BOMB = 4;

var audioSounds = [];

var audioToLoad = 0;


function playAudio(audioSOUND){
    audioSounds[audioSOUND].play();
}

function countLoadedAudioAndLaunchIfReady() {
	audioToLoad--;
	if(audioToLoad == 0) {
		audioLoadingDone();
	}
}

function beginLoadingAudio(audioVar, fileName) {
	audioVar.onloadeddata = countLoadedAudioAndLaunchIfReady;
	audioVar.src = "audio/"+fileName;
}

function loadAudio(audioCode, fileName) {
	audioSounds[audioCode] = document.createElement("audio");
	beginLoadingAudio(audioSounds[audioCode], fileName);
}

function loadAllAudio() {
	var audioList = [
		{audioSOUND: A_LOSER, theFile: "aloser.mp3"},
        {audioSOUND: BARACK_OBAMA, theFile: "barackobama.mp3"},
        {audioSOUND: RICH, theFile: "rich.mp3"},
        {audioSOUND: BOMB, theFile: "bomb.mp3"},
        
		];

	audioToLoad = audioList.length;

	for(var i=0;i<audioList.length;i++) {
        loadAudio(audioList[i].audioSOUND, audioList[i].theFile);
	}
}