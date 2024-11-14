let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

function changeSlide(step) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}
