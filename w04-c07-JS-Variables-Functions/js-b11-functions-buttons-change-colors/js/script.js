let r = 0;
let g = 0;
let b = 0;
let myBox = document.getElementById('box');

function addMoreRed() {
  r = r + 10;
  changeBgColor();
}

function addMoreGreen() {
  g = g + 10;
  changeBgColor();
}

function addMoreBlue() {
  b = b + 10;
  changeBgColor();
}

function changeBgColor() {
  myBox.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  console.log( "RGB: " + r + "," + g + "," + b);
}
