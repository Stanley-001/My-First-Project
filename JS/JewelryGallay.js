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
  var slides = document.getElementsByClassName("img");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Sliding by it's self
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}


// ALL SECOND IMAGES GALARY
var slideIndex2 = 1;
    showSlides2(slideIndex2);

    // Next/previous controls
    function plusSlides2(m) {
    showSlides2(slideIndex2 += m);
    }

    // Thumbnail image controls
    function currentSlide2(m) {
    showSlides2(slideIndex2 = m);
    }

    function showSlides2(m) {
        var o;
        var slides = document.getElementsByClassName("mySlides2");
        var dots = document.getElementsByClassName("dot2");
        if (m > slides.length) {slideIndex2 = 1}
        if (m < 1) {slideIndex2 = slides.length}
        for (o = 0; o < slides.length; o++) {
            slides[o].style.display = "none";
        }
        for (o = 0; o < dots.length; o++) {
            dots[o].className = dots[o].className.replace(" active", "");
        }
        slides[slideIndex2-1].style.display = "block";
        dots[slideIndex2-1].className += " active";
    }

    // ALL THILD IMAGES GALARY

    var slideIndex3 = 1;
    showSlides3(slideIndex3);

    // Next/previous controls
    function plusSlides3(d) {
    showSlides3(slideIndex3 += d);
    }

    // Thumbnail image controls
    function currentSlide(d) {
    showSlides3(slideIndex3 = d);
    }

    function showSlides3(d) {
        var f;
        var slides = document.getElementsByClassName("mySlides3");
        var dots = document.getElementsByClassName("dot3");
        if (d > slides.length) {slideIndex3 = 1}
        if (d < 1) {slideIndex3 = slides.length}
        for (f = 0; f < slides.length; f++) {
            slides[f].style.display = "none";
        }
        for (f = 0; f < dots.length; f++) {
            dots[f].className = dots[f].className.replace(" active", "");
        }
        slides[slideIndex3-1].style.display = "block";
        dots3[slideIndex3-1].className += " active";
    }