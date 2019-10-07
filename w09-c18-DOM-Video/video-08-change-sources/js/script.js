let currentSrc = 0;
let sources = ["video/bolt.mp4", "video/robot.mp4"];

let player = document.getElementById("player");
player.addEventListener("ended", playerEnded);

let startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startPlaying);

function startPlaying() {
  console.log("Playing video/bolt.mp4");
  player.style.display = "block";
  startBtn.style.display = "none";
  player.play();
}

function playerEnded(e) {
  console.log("Video ended");
  currentSrc++;
  if (currentSrc < sources.length) {
    console.log("Now playing", sources[currentSrc]);
    player.src = sources[currentSrc];
    player.currentTime = 0;
    player.play();
  } else {
    alert("Done!");
  }
}
