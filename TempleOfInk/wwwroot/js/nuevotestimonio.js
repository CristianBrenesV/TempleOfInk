// Seleccionar todos los elementos de las estrellas
const stars = document.querySelectorAll('.stars label');

// Añadir el evento de clic a cada estrella
stars.forEach(star => {
    star.addEventListener('click', function () {
        // Eliminar la clase 'selected' de todas las estrellas
        stars.forEach(s => s.classList.remove('selected'));

        // Añadir la clase 'selected' a la estrella seleccionada y las anteriores
        let index = Array.from(stars).indexOf(star); // Obtener el índice de la estrella clickeada
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('selected');
        }
    });
});
