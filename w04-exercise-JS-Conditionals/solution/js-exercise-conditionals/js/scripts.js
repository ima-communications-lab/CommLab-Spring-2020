var currentPanel = 0;
var lowOpacity = 0.1;

function walk() {
  // increment our variable by one
  currentPanel += 1;

  // reset if needed
  if (currentPanel > 2) {
    currentPanel = 0;
  }

  var panel0 = document.getElementById("panel0");
  var panel1 = document.getElementById("panel1");
  var panel2 = document.getElementById("panel2");

  if (currentPanel === 0) {
    panel0.style.opacity = 1;
    panel1.style.opacity = lowOpacity;
    panel2.style.opacity = lowOpacity;
  } else if (currentPanel === 1) {
    panel0.style.opacity = lowOpacity;
    panel1.style.opacity = 1;
    panel2.style.opacity = lowOpacity;
  } else {
    panel0.style.opacity = lowOpacity;
    panel1.style.opacity = lowOpacity;
    panel2.style.opacity = 1;
  }
}
