function showClientMousePosition() {

  let cX = event.clientX;
  let cY = event.clientY;

  document.getElementById('client-x').innerHTML = cX;
  document.getElementById('client-y').innerHTML = cY;

}


function showOffsetMousePosition() {

  let oX = event.offsetX;
  let oY = event.offsetY;

  document.getElementById('offset-x').innerHTML = oX;
  document.getElementById('offset-y').innerHTML = oY;

}


// https://www.w3schools.com/jsref/event_clientx.asp
// event.screenX;
// event.screenY; (?)
