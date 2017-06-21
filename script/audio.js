// audio, which play when game is started
var startGameSound = document.getElementById("startgame"); 
function playAudio() { 
    startGameSound.play(); 
} 

// audio, which play when tank hit the wall
var hitWallSound = document.getElementById("hit"); 
function playAudio1() { 
    hitWallSound.play(); 
}

// audio, which play when you change the map
var changeMapSound = document.getElementById("map"); 
function playAudio2() { 
    changeMapSound.play(); 
}