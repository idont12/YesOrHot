let slideIndex = 1;

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");

    if (slideIndex > slides.length) { slideIndex = 1 }
    else if (slideIndex < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        if (i != slideIndex - 1) {
            slides[i].style.display = "none";
            dots[i].className = dots[i].className.replace(" active", "");
        }
        else {
            slides[i].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    }
    
    document.getElementById("caption").innerHTML = dots[slideIndex - 1].alt;
}