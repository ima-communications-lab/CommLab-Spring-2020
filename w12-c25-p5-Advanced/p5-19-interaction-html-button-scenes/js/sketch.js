let scene = 0;

function displayScene1() {
  background(0); // to clear the background
  scene = 1;
}

function displayScene2() {
  background(0); // to clear the background
  scene = 2;
}

function displayScene3() {
  background(0); // to clear the background
  scene = 3;
}


// p5 functions

function setup() {
  createCanvas(600, 600);
}


function draw() {
  if (scene == 1) {
    drawRandomLines();
  }
  else if (scene == 2) {
    drawRandomCircle();
  }
  else if (scene == 3) {
    drawRandomRect();
  }
  else {
    background(0);
  }
}


function drawRandomLines() {
  let x1 = random(width);
  let y1 = random(height);
  let x2 = random(width);
  let y2 = random(height);

  noFill();
  stroke(random(255), random(255), random(255), random(255));
  line(x1, y1, x2, y2);
}

function drawRandomCircle() {
  let x = random(width);
  let y = random(height);
  let diameter = random(10, 100);

  noStroke();
  fill(random(255), random(255), random(255), random(255));
  ellipse(x, y, diameter, diameter);
}

function drawRandomRect() {
  let x = random(width);
  let y = random(height);
  let diameter = random(10, 100);

  noFill();
  stroke(random(255), random(255), random(255), random(255));
  rectMode(CENTER);
  rect(x, y, diameter, diameter);
}
