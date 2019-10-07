let r = 0;
let g = 0;
let b = 0;
let myBox = document.getElementById('box');

function addMoreRed() {
  r = r + 10;
  myBox.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  console.log( "red: " + r );
}

function addMoreGreen() {
  g = g + 10;
  myBox.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  console.log( "green: " + g );
}

function addMoreBlue() {
  b = b + 10;
  myBox.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  console.log( "blue: " + b );
}
