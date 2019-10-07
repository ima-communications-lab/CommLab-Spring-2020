let images = [
  "images/walking0.jpg",
  "images/walking1.jpg",
  "images/walking2.jpg",
];
let currentIndex = 0;


// image
let img = document.createElement("img");
img.src = images[currentIndex];
document.body.appendChild(img);

// player
let player = document.getElementById("player");
player.addEventListener("timeupdate", playerProgressed);

// buttons
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
startBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);


// player event + image animation
function playerProgressed(e) {
  currentIndex++;
  if (currentIndex == images.length) {
    currentIndex = 0;
  }
  img.src = images[currentIndex];
}


// buttons' functions
function playAudio() {
  player.play();
}

function pauseAudio() {
  player.pause();
}
