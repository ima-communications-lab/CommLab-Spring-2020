let xPos = 50;
let yPos = 100;
let myBox = document.getElementById('box');


function updatePosition() {
  let xValue = parseInt( document.getElementById('xInput').value );
  let yValue = parseInt( document.getElementById('yInput').value );

  // parseInt(), parseFloar() and Number()
  // https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/

  console.log( "xInput: " + xValue + ", yInput: " + yValue);

  movePosition( xValue, yValue );
}

function movePosition( x, y ) {
  xPos = xPos + x;  // xPos += x;
  yPos = yPos + y;  // yPos += y;

  myBox.style.left = xPos + "px";
  myBox.style.top = yPos + "px";

  console.log( "left: " + xPos + ", top: " + yPos);
}
