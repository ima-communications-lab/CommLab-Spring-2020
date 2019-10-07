let player = document.getElementById("player");

let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
stopBtn.addEventListener("click", stopAudio);

function playAudio() {
  player.play();
}

function pauseAudio() {
  player.pause();
}

function stopAudio() {
  player.currentTime = 0;
  player.pause();
}
