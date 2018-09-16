var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("bullet");
  var mobileDescriptions = document.getElementsByClassName("outer-descriptions")[0].children;
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
     mobileDescriptions[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" blue", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " blue";
  mobileDescriptions[slideIndex-1].style.display = "block";
}