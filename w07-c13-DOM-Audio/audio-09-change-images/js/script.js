let currentImage = 1;

let player = document.getElementById("player");
player.addEventListener("timeupdate", playerProgressed);

let startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startSlideShow);

let img = document.createElement("img");
img.src = "images/cat1.jpg";

function startSlideShow() {
  startBtn.style.display = "none";
  document.body.appendChild(img);
  player.play();
}

function playerProgressed(e) {
  if (currentImage === 1 && player.currentTime > 6) {
    currentImage++;
    img.src = "images/cat2.jpg";
  } else if (currentImage === 2 && player.currentTime > 12) {
    currentImage++;
    img.src = "images/cat3.jpg";
  }
}
