var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  //reading elements from html
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  //limits validation for making a circular slider
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  //disable images from slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  //deactivate dots from view
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }

  //showing slide selected
  slides[slideIndex-1].style.display = "block";
  //activating dot related to the image
  dots[slideIndex-1].className += " active";
}