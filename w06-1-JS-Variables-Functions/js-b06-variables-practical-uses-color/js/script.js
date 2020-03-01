/* when adjust color value */

// red-ish color
let r = 200;
let g = 0;
let b = 0;

// let's make it brighter!
r = r + 50;
g = g + 50;
b = b + 50;

let newColor = "rgb(" + r + "," + g + "," + b + ")";
let bgColor = "rgb(255, 255, 0)";  // yellow

console.log( "newColor: " + newColor );

document.getElementById('title1').style.color = newColor;
document.getElementById('title1').style.backgroundColor = bgColor;
