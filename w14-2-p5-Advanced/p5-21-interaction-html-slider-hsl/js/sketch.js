let bgSlider = document.getElementById("background");
let fgSlider = document.getElementById("foreground");

bgSlider.addEventListener("input", changeBackground);
fgSlider.addEventListener("input", changeForeground);

let backgroundHue = 0;
let foregroundHue = 0;

function changeBackground(e) {
  backgroundHue = e.target.value;
}

function changeForeground(e) {
  foregroundHue = e.target.value;
}

function setup() {
  createCanvas(500, 500);
  colorMode(HSL); // ***
}

function draw() {
  background(backgroundHue, 100, 50);
  fill(foregroundHue, 100, 50);
  ellipse(width / 2, height / 2, 300, 300);
}
