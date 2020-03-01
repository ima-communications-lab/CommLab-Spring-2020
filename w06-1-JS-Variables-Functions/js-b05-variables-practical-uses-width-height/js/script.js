/* when changing width and height */

let w = 200;
let h = 220;

w = w + 100;
h = h + 100;

let newWidth = w + "px";
let newHeight = h + "px";

console.log( "width & height: " + newWidth + " " + newHeight );

//document.getElementById('box').style.width = newWidth;
//document.getElementById('box').style.height = newHeight;

let myBox = document.getElementById('box');
myBox.style.width = newWidth;
myBox.style.height = newHeight;
