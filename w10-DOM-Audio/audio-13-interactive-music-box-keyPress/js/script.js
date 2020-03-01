let sounds = [
  "audio/0.wav",
  "audio/1.wav",
  "audio/2.wav",
  "audio/3.wav",
  "audio/4.wav",
  "audio/5.wav"
];
let players = [];
let divs = [];



for (let i = 0; i < sounds.length; i++) {
  // create an audio player just for this file
  let player = document.createElement("audio");
  player.loop = true;
  player.src = sounds[i];
  document.body.appendChild(player);
  players[i] = player; // store the player in the "players" array

  // create a div to show the play is active or not
  const div = document.createElement("div");
  div.innerHTML = "Sound " + i;
  document.body.appendChild(div);
  divs[i] = div;  // store the div in the "divs" array
}


window.addEventListener("keypress", triggerSoundWithKey);
function triggerSoundWithKey(event) {
  console.log( event );
  if (event.key == "q" || event.key == "Q") {
    playSound(0);
  }
  if (event.key == "w" || event.key == "w") {
    playSound(1);
  }
  if (event.key == "e" || event.key == "e") {
    playSound(2);
  }
  if (event.key == "r" || event.key == "r") {
    playSound(3);
  }
  if (event.key == "t" || event.key == "t") {
    playSound(4);
  }
  if (event.key == "y" || event.key == "y") {
    playSound(5);
  }
}


function playSound(index) {
  if (players[index].paused) {
    players[index].play();
    divs[index].className = "active";
  } else {
    players[index].pause();
    divs[index].className = "";
  }
}
