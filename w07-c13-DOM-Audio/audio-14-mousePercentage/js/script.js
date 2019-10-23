window.addEventListener("mousemove", myFunction);

function myFunction(){
  let xPercentage = event.clientX / window.innerWidth * 100.0;
  let yPercentage = event.clientY / window.innerHeight * 100.0;
  console.log(xPercentage + " " + yPercentage);

  document.getElementById('titleInfoX').innerHTML = "X percentage: " + (parseFloat(xPercentage).toPrecision(3)) + "%";
  document.getElementById('titleInfoY').innerHTML = "Y percentage: " + (parseFloat(yPercentage).toPrecision(3)) + "%";
}
