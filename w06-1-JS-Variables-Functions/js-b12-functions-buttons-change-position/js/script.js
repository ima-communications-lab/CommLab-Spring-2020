let xPos = 50;
let yPos = 100;
let myBox = document.getElementById('box');

function moveUp() {
  movePosition( 0, -10 );
}

function moveDown() {
  movePosition( 0, 10 );
}

function moveLeft() {
  movePosition( -10, 0 );
}

function moveRight() {
  movePosition( 10, 0 );
}

function movePosition( x, y ) {
  xPos = xPos + x;  // xPos += x;
  yPos = yPos + y;  // yPos += y;

  myBox.style.left = xPos + "px";
  myBox.style.top = yPos + "px";

  console.log( "left: " + xPos + ", top: " + yPos);
}
