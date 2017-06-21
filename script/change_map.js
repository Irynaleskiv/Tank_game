// loaded map & tank
function startGame() {
  prepareMap();
  loadMap();
  loadTanks();
}

// removed current map
function removeMap() {
  var map = document.getElementById("divMap");
  while (map.firstChild) {
    map.removeChild(map.firstChild);
  }
}

// removed tank
function removeTank() {
  var myTank = document.getElementById("myTank");
  myTank.remove();
}

// removed current map & tank
function removeTankMap() {
  playAudio2();
  removeMap();
  removeTank();
}

// changed map to map1
var map1 = document.getElementById("map1");
map1.addEventListener("click", function() {
  landMap = landMap1;
  removeTankMap();
  startGame();
});

// changed map to map2
var map2 = document.getElementById("map2");
map2.addEventListener("click", function() {
  landMap = landMap2;
  removeTankMap();
  startGame();
});

// changed map to map3
var map3 = document.getElementById("map3");
map3.addEventListener("click", function() {
  landMap = landMap3;
  removeTankMap();
  startGame();
});