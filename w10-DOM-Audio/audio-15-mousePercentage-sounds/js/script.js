let sounds = [
  "audio/0.wav",
  "audio/1.wav",
  "audio/2.wav",
  "audio/3.wav"
];

let players = [];


for (let i = 0; i < sounds.length; i++) {
  let p = document.createElement("audio");
  p.src = sounds[i];
  p.loop = true;
  document.body.appendChild(p);
  p.play();
  p.volume = 0.0;
  players[i] = p;
}

window.addEventListener("mousemove", updateSoundVolume);
function updateSoundVolume(){
  let xPercentage = event.clientX / window.innerWidth;
  let yPercentage = event.clientY / window.innerHeight;
  console.log(xPercentage + " " + yPercentage);

  document.getElementById('titleInfoX').innerHTML = "X percentage: " + (parseFloat(xPercentage).toPrecision(3));
  document.getElementById('titleInfoY').innerHTML = "Y percentage: " + (parseFloat(yPercentage).toPrecision(3));

  // on x
  players[0].volume = xPercentage;
  players[1].volume = 1.0 - xPercentage;

  // on y
  players[2].volume = yPercentage;
  players[3].volume = 1.0 - yPercentage;
}
