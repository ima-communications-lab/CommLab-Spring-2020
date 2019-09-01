let imgFilenames = [ "images/walking0.jpg","images/walking1.jpg","images/walking2.jpg" ];

let interval = setInterval(swapImage, 200);
let imgIndex = 0;


function swapImage() {
  let img = document.getElementById('walking-img');
  img.src = imgFilenames[imgIndex];

  imgIndex++;
  if (imgIndex == 3) {
    imgIndex = 0;
  }
}


// create buttons to stop/start the interval
let btnStop = document.createElement("button");
btnStop.innerHTML = "Stop Interval";
btnStop.addEventListener("click", stopInterval);
document.body.appendChild(btnStop);

let btnStart = document.createElement("button");
btnStart.innerHTML = "Start Interval";
btnStart.addEventListener("click", startInterval);
document.body.appendChild(btnStart);

function stopInterval(e) {
  clearInterval(interval);
  console.log("Interval stopped!");
}

function startInterval() {
  interval = setInterval(swapImage, 200);
}
