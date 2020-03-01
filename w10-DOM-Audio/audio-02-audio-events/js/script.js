let player = document.getElementById("player");
let message = document.getElementById("message");

player.addEventListener("play", playerStarted);
player.addEventListener("timeupdate", playerProgressed);
player.addEventListener("pause", playerPaused);
player.addEventListener("ended", playerEnded);

function playerStarted() {
  message.innerHTML = "The player is playing";
}

function playerProgressed(e) {
  let minutes = Math.floor(player.currentTime / 60);
  let seconds = Math.floor(player.currentTime) - minutes * 60;
  message.innerHTML = "The player is playing at " + minutes + ":" + seconds;
}

function playerPaused() {
  message.innerHTML = "The player is paused";
}

function playerEnded() {
  message.innerHTML = "The player reached the end";
}
