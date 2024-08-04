// NAVBAR
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('navbar-black', window.scrollY > 50);
});

// END NAVBAR

// LANDING PAGE

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("img-carousel");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000);
}

// END LANDINGPAGE


// PHOTOGRAPHY


// END PHOTOGRAPHY
