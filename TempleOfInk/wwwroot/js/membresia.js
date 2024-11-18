document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.membership-cards');
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    const totalCards = cards.length;
    const cardsToShow = 3; // Cantidad de tarjetas visibles
    const cardMargin = parseInt(getComputedStyle(cards[0]).marginRight) || 0;
    const cardWidth = cards[0].offsetWidth + cardMargin; // Ancho + margen
    const maxIndex = totalCards - cardsToShow; // Último índice permitido

    // Actualiza el ancho del contenedor dinámicamente
    carousel.style.width = `${totalCards * cardWidth}px`;

    function moveCarousel() {
        // Ajustamos el índice para que esté dentro de los límites
        currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

        // Calculamos el desplazamiento
        const offset = -currentIndex * cardWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    function nextSlide() {
        if (currentIndex < maxIndex) {
            currentIndex++;
            moveCarousel();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            moveCarousel();
        }
    }

    // Eventos de los botones
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
});
