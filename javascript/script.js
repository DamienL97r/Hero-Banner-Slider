
/*Début slider*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("slide");
var contents = document.getElementsByClassName("slider-content");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
contents[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";
contents[slideIndex-1].style.display = "block";
}
setInterval(function() { plusSlides(1) }, 10000);

  /*Fin slider*/

