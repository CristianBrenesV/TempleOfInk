let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.testimonial-slide');
    slides[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + slides.length) % slides.length;

    slides[currentIndex].classList.add('active');
}

setInterval(() => {
    moveSlide(1);
}, 10000);  // Cambia cada 10 segundos
