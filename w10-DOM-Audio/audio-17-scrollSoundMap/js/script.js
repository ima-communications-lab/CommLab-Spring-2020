// IMA | NYU Shanghai
// by Stavros Didakis

//The updateScrollPosition function calculates the scrolling position on screen
//It then sends the X,Y value of the scrolling to the controlColor and controlVolumeX functions
//Each controlVolume function is going to calculate the distance between a specific point on the map,
//and where the scrolling is
//According to the distance, the audio volume is adjusted accordingly

function updateScrollPosition(){
  let scrollTop = document.documentElement.scrollTop;
  let scrollLeft = document.documentElement.scrollLeft;
  //document.getElementById('scroll-x').innerHTML = scrollLeft;
  //document.getElementById('scroll-y').innerHTML = scrollTop;

  let scrollV = (document.body.scrollTop + scrollTop) /(document.documentElement.scrollHeight - document.documentElement.clientHeight);
  scrollV = parseFloat(scrollV).toPrecision(3);
  let scrollPercentageV = 100. * (parseFloat(scrollV).toPrecision(3));
  document.getElementById('titleInfoV').innerHTML = "Scroll percentage V: " + parseInt(scrollPercentageV) + "%";

  let scrollH = (document.body.scrollLeft + scrollLeft)/(document.documentElement.scrollWidth - document.documentElement.clientWidth);
  scrollH = parseFloat(scrollH).toPrecision(3);
  let scrollPercentageH = 100. * (parseFloat(scrollH).toPrecision(3));
  document.getElementById('titleInfoH').innerHTML = "Scroll percentage H: " + parseInt(scrollPercentageH) + "%";

  controlColor(scrollLeft, scrollTop);
  controlVolume1(scrollLeft, scrollTop);
  controlVolume2(scrollLeft, scrollTop);
  controlVolume3(scrollLeft, scrollTop);
  controlVolume4(scrollLeft, scrollTop);
}
//window.addEventListener("scroll", scrollFunction);

function controlColor(x, y) {
  // x value changes approximately between 0 and 2500.
  // y value changes approximately between 0 and 2500 as well.
  // (they may be different based on the broswer's width and height.)
  // 2500 * 0.1 = 250
  // parseInt() discards floating point numbers.
  let colorR = parseInt( x * 0.1 ); // approx. 0 - 250
  let colorG = 50;
  let colorB = parseInt(y * 0.1 ); // approx. 0 - 250

  document.getElementById('really-large-div').style.backgroundColor
    = "rgb(" + colorR + "," + colorG + "," + colorB + ")";
}

let scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function controlVolume1(x, y) {
  document.getElementById('circleTopLeft').style.left = "0px";
  document.getElementById('circleTopLeft').style.top = "0px";
  let circleTopLeftX = parseInt(document.getElementById('circleTopLeft').style.left);
  let circleTopLeftY = parseInt(document.getElementById('circleTopLeft').style.top);

  let dist = Math.sqrt( Math.pow((x-circleTopLeftX), 2) + Math.pow((y-circleTopLeftY), 2) );

  let distToVol;
  if (dist>=0 && dist<=1600){
    distToVol = scale(dist, 0, 1600, 1., 0.)
  } else {
    distToVol = 0;
  }
  player1.volume = distToVol;
  updateMessage();
}

function controlVolume2(x, y) {
  document.getElementById('circleBottomLeft').style.left = "0px";
  document.getElementById('circleBottomLeft').style.top = "2950px";
  let circleBottomLeftX = parseInt(document.getElementById('circleBottomLeft').style.left);
  let circleBottomLeftY = parseInt(document.getElementById('circleBottomLeft').style.top);

  let dist = Math.sqrt( Math.pow((x-circleBottomLeftX), 2) + Math.pow((y-Math.abs(circleBottomLeftY-426)), 2) );

  let distToVol;
  if (dist>=0 && dist<=1600){
    distToVol = scale(dist, 0, 1600, 1., 0.)
  } else {
    distToVol = 0;
  }
  player2.volume = distToVol;
  updateMessage();
}

function controlVolume3(x, y) {
  document.getElementById('circleTopRight').style.left = "2950px";
  document.getElementById('circleTopRight').style.top = "0px";
  let circleTopRightX = parseInt(document.getElementById('circleTopRight').style.left);
  let circleTopRightY = parseInt(document.getElementById('circleTopRight').style.top);

  let dist = Math.sqrt( Math.pow((x-circleTopRightX+894), 2) + Math.pow((y-Math.abs(circleTopRightY)), 2) );

  let distToVol;
  if (dist>=0 && dist<=1600){
    distToVol = scale(dist, 0, 1600, 1., 0.)
  } else {
    distToVol = 0;
  }
  player3.volume = distToVol;
  updateMessage();
}

function controlVolume4(x, y) {
  document.getElementById('circleBottomRight').style.left = "2950px";
  document.getElementById('circleBottomRight').style.top = "2950px";
  let circleBottomRightX = parseInt(document.getElementById('circleBottomRight').style.left);
  let circleBottomRightY = parseInt(document.getElementById('circleBottomRight').style.top);

  let dist = Math.sqrt( Math.pow((x-circleBottomRightX+894), 2) + Math.pow((y-Math.abs(circleBottomRightY-426)), 2) );

  let distToVol;
  if (dist>=0 && dist<=1600){
    distToVol = scale(dist, 0, 1600, 1., 0.)
  } else {
    distToVol = 0;
  }
  player4.volume = distToVol;
  updateMessage();
}

function playAudio() {
  player1.play();
  player2.play();
  player3.play();
  player4.play();
  updateMessage();
}

function pauseAudio() {
  player1.pause();
  player2.pause();
  player3.pause();
  player4.pause();
  updateMessage();
}

function stopAudio() {
  player1.currentTime = 0;
  player1.pause();
  player2.currentTime = 0;
  player2.pause();
  player3.currentTime = 0;
  player3.pause();
  player4.currentTime = 0;
  player4.pause();
  updateMessage();
}

function updateMessage() {
  //message.innerHTML = "time: " + player.currentTime
  //message.innerHTML += "<br>";
  //message.innerHTML += "volume: " + player.volume;
}
