function updateScrollPosition() {

  let x = window.scrollX;
  let y = window.scrollY;

  document.getElementById('scroll-x').innerHTML = x;
  document.getElementById('scroll-y').innerHTML = y;

  console.log( x + ", " + y );


  let paragraph = document.getElementById('content-center');
  if ( y < 500 ) {
    paragraph.innerHTML = "Content 1";
  } else if ( y >= 500 && y < 1000 ) {
    paragraph.innerHTML = "Content 2";
  } else if ( y >= 1000 && y < 1500 ) {
    paragraph.innerHTML = "Content 3";
  } else if ( y >= 1500 && y < 2000 ) {
    paragraph.innerHTML = "Content 4";
  } else {
    paragraph.innerHTML = "fin.";
  }

}
