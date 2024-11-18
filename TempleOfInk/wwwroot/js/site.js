window.addEventListener('load', function () {
    const footer = document.querySelector('.footer');
    const contentHeight = document.body.offsetHeight;
    const windowHeight = window.innerHeight;

    // Verificar si el contenido es más corto que la ventana
    if (contentHeight <= windowHeight) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
    } else {
        footer.style.position = 'relative'; // Dejarlo en su posición normal cuando hay suficiente contenido
    }
});

window.addEventListener('resize', function () {
    const footer = document.querySelector('.footer');
    const contentHeight = document.body.offsetHeight;
    const windowHeight = window.innerHeight;

    // Rehacer la verificación cuando se redimensiona la ventana
    if (contentHeight <= windowHeight) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
    } else {
        footer.style.position = 'relative';
    }
});
