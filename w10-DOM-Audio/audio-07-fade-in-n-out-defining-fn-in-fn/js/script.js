let player = document.getElementById("player");
let message = document.getElementById("message");

let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");
let fadeInBtn = document.getElementById("fadeInBtn");  // ***
let fadeOutBtn = document.getElementById("fadeOutBtn");  // ***

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
stopBtn.addEventListener("click", stopAudio);
fadeInBtn.addEventListener("click", fadeIn);  // ***
fadeOutBtn.addEventListener("click", fadeOut);  // ***

let volume = 1.0;
let fadeEffect;
let intervalTime = 100; // 0.1 sec

function fadeIn() {
  // clear the previous effect first
  clearInterval(fadeEffect);
  // and apply a new effect
  fadeEffect = setInterval( function(){
    volume += 0.05;
    if (volume > 1.0) {
      volume = 1.0;
      clearInterval(fadeEffect);  // ***
    }
    player.volume = volume;
    updateMessage();
  }, intervalTime );
}

function fadeOut() {
  // clear the previous effect first
  clearInterval(fadeEffect);
  // and apply a new effect
  fadeEffect = setInterval( function(){
    volume -= 0.05;
    if (volume < 0.0) {
      volume = 0.0;
      clearInterval(fadeEffect);  // ***
    }
    player.volume = volume;
    updateMessage();
  }, intervalTime );
}

function playAudio() {
  player.play();
  updateMessage();
}

function pauseAudio() {
  player.pause();
  updateMessage();
}

function stopAudio() {
  player.currentTime = 0;
  player.pause();
  updateMessage();
}

function updateMessage() {
  message.innerHTML = "time: " + player.currentTime
  message.innerHTML += "<br>";
  message.innerHTML += "volume: " + player.volume;
}
