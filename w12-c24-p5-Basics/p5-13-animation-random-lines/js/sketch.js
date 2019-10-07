function setup() {
  createCanvas(500, 600);
  background(0);
}


function draw() {
  //background(0);

  let x1 = random(width);
  let y1 = random(height);
  let x2 = random(width);
  let y2 = random(height);

  stroke(random(255), random(255), random(255), random(255));
  line(x1, y1, x2, y2);
}
