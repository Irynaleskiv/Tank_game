// My tank class extend from the parent class
function MyTank(x, y) {
	Tanks.call(this, x, y);
}

// created tank with defined properties
  MyTank.prototype.createTank = function() {
	  var container = document.createElement('div');
    container.id = "myTank";
	  document.body.appendChild(container);
	  var tank = document.createElement('img');
	  tank.src = 'img/tank.png';
	  container.appendChild(tank);
	  tank.id = "itank";
	  tank.style.position = "absolute";
	  tank.style.left = (this.x) * this.width + this.offsetX + "px";
	  tank.style.top = (this.y) * this.height + this.offsetY + "px";
}

// parent class
function Tanks(x, y) {
	this.x = x; 
	this.y = y; 
	this.offsetX = 2;
	this.offsetY = 2;
	this.width = 40; 
	this.height = 40;

	// checked the collision tank with wall
	this.checkCollision = function(posx, posy) {
		var gridType = landMap[posy][posx];
		if ((gridType == BRICK)) {
			return true;
		}
	}

	// Moves right, doesn`t move beyond the border
	this.moveRight = function() {
		var div = document.getElementById("itank");
		div.style.transform = "rotate(90deg)";
		if (this.x < 12) {
			if (this.checkCollision(this.x + 1, this.y)) {
        playAudio1();
				return;
			}
			this.x = this.x + 1;
			div.style.left = (parseInt(div.style.left) + 40) + 'px';;
		}
	}

	// Moves left, doesn`t move beyond the border
	this.moveLeft = function() {
		var div = document.getElementById("itank");
		div.style.transform = "rotate(-90deg)";

		if (this.x > 0) {
			if (this.checkCollision(this.x - 1, this.y)) {
        playAudio1();
				return;
			}
			this.x = this.x - 1;
			div.style.left = (parseInt(div.style.left) - 40) + 'px';
		}
	}

	// Moves up, doesn`t move beyond the border
	this.moveUp = function() {
		var div = document.getElementById("itank");
		div.style.transform = "rotate(0deg)";
		if (this.y > 0) {
			if (this.checkCollision(this.x, this.y - 1)) {
        playAudio1();
				return;
			}
			this.y = this.y - 1;
			div.style.top = (parseInt(div.style.top) - 40) + 'px';
		}
	}

	// Moves down, doesn`t move beyond the border
	this.moveDown = function() {
		var div = document.getElementById("itank");
		div.style.transform = "rotate(180deg)";
		if (this.y < 12) {
			if (this.checkCollision(this.x, this.y + 1)) {
        playAudio1();
				return;
			}
			this.y = this.y + 1;
			div.style.top = (parseInt(div.style.top) + 40) + 'px';
		}
	}
}

// added keyboard key & concatenate them to the moving all sides
document.onkeydown = keylistener;
function keylistener(e) {
  var KEYCODE_LEFT = 37;
  var KEYCODE_RIGHT = 39;
  var KEYCODE_UP = 38;
  var KEYCODE_DOWN = 40;
  
  if (e.keyCode == KEYCODE_LEFT) {
    myTank.moveLeft();
  }
  else if (e.keyCode == KEYCODE_RIGHT) {
    myTank.moveRight();
  }
  else if (e.keyCode == KEYCODE_UP) {
    myTank.moveUp();
  }
  else if (e.keyCode == KEYCODE_DOWN) {
    myTank.moveDown();
  }
}
