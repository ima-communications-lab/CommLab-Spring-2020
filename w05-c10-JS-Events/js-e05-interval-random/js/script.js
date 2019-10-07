let interval = setInterval(changeColor, 1000);

function changeColor() {
  let r = parseInt( Math.random() * 255 );
  let g = parseInt( Math.random() * 255 );
  let b = parseInt( Math.random() * 255 );

  let randomColor = "rgb(" + r + "," + g + "," + b + ")";
  console.log( randomColor );

  document.body.style.backgroundColor = randomColor;

}

// code to stop the interval
let btn = document.getElementById("btn");
btn.addEventListener("click", clicked);

function clicked(e) {
  clearInterval(interval);
  console.log("Interval stopped!");
}
