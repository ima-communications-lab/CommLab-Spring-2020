let interval = setInterval(swapImage, 200);
let imgNum = 0;

function swapImage() {
  let img = document.getElementById('walking-img');
  let imgFilename = "images/walking" + imgNum + ".jpg";
  img.src = imgFilename;

  imgNum++;
  if (imgNum == 3) {
    imgNum = 0;
  }
}


// code to stop/start the interval
let btnStop = document.getElementById("btn-stop");
btnStop.addEventListener("click", stopInterval);

let btnStart = document.getElementById("btn-start");
btnStart.addEventListener("click", startInterval);


function stopInterval(e) {
  clearInterval(interval);
  console.log("Interval stopped!");
}

function startInterval() {
  interval = setInterval(swapImage, 200);
}
