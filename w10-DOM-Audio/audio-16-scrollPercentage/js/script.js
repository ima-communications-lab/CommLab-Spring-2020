// IMA | NYU Shanghai
// by Stavros Didakis

window.addEventListener("scroll", myFunction);

function myFunction(){
  let scrollPercentage = 100. * (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  document.getElementById('titleInfo').innerHTML = "Scroll percentage: " + (parseFloat(scrollPercentage).toPrecision(3)) + "%";
}
