// parent class with asigned properties
function Block(x, y) {
  // cell width and height
  this.width = 40;
  this.height = 40;
  this.x = x;
  this.y = y;
  this.id = 0;
  // create a block
  this.createBlock = function() {}
}

// create a brick on map in container div with define properties
function Brick(x, y) {
  Block.apply(this, [x, y]);

  this.createBlock = function() {
    var brick = document.createElement('div');
    document.getElementById(x + "" + y).appendChild(brick);
    brick.className = "brick";
    brick.style.position = "absolute";
    brick.style.width = this.width + "px";
    brick.style.height = this.height + "px";
    brick.style.left = (this.x) * this.width + "px";
    brick.style.top = (this.y) * this.height + "px";
  }
}

function Space(x, y) {
  Block.apply(this, [x, y]);
}