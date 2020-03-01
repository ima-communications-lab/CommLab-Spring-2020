function showScrollPosition() {

  let x = window.scrollX;
  let y = window.scrollY;

  document.getElementById('scroll-x').innerHTML = x;
  document.getElementById('scroll-y').innerHTML = y;

  console.log( x + ", " + y );
}
