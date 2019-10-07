let currentSrc = 0;
let sources = ["audio/track1.mp3", "audio/track2.mp3", "audio/track3.mp3"];

let player = document.getElementById("player");
player.addEventListener("ended", playerEnded);

let startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startPlaying);

function startPlaying() {
  console.log("Playing audio/track1.mp3");
  startBtn.style.display = "none";
  player.play();
}

function playerEnded(e) {
  console.log("Track ended");
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
