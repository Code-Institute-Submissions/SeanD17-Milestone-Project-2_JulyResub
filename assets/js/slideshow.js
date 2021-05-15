//Below code gotten from this website:https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = 1;
showSlides(slideIndex);
//goes to the next image in the slideshow when the > is clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}
//shows the current image of the slideshow
function currentSlide(n) {
    showSlides(slideIndex = n);
}
//function that goes through each image in the slideshow and displays them
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideshow");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}