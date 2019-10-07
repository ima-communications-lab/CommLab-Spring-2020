let sliderR = document.getElementById("colorRed");
let sliderG = document.getElementById("colorGreen");
let sliderB = document.getElementById("colorBlue");

sliderR.addEventListener("input", changeColorRed);
sliderG.addEventListener("input", changeColorGreen);
sliderB.addEventListener("input", changeColorBlue);

let colorR = 0;
let colorG = 0;
let colorB = 0;

function changeColorRed(e) {
  colorR = e.target.value;
}

function changeColorGreen(e) {
  colorG = e.target.value;
}

function changeColorBlue(e) {
  colorB = e.target.value;
}


// p5 Functions

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(200);
  fill(colorR, colorG, colorB);
  ellipse(width / 2, height / 2, 300, 300);
}
