// Obtiene todos los elementos de las imágenes
const imagenes = document.querySelectorAll('.galeria .imagen img');
const imagenExpandida = document.getElementById('imagenExpandida');
const imgExpandida = document.getElementById('imgExpandida');
const cerrar = document.getElementById('cerrar');
const zoomIn = document.getElementById('zoomIn');
const zoomOut = document.getElementById('zoomOut');

// Variables para el zoom
let zoom = 1;

// Función para expandir la imagen
imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        imgExpandida.src = imagen.src;  // Establece la imagen expandida
        imagenExpandida.style.display = 'flex';  // Muestra el contenedor de la imagen expandida
    });
});

// Función para cerrar la imagen expandida
cerrar.addEventListener('click', () => {
    imagenExpandida.style.display = 'none';  // Oculta el contenedor
    zoom = 1;  // Resetea el zoom
    imgExpandida.style.transform = `scale(${zoom})`;  // Aplica el reset de zoom
});

// Función para hacer zoom in
zoomIn.addEventListener('click', () => {
    zoom += 0.1;  // Aumenta el zoom
    imgExpandida.style.transform = `scale(${zoom})`;  // Aplica el zoom
});

// Función para hacer zoom out
zoomOut.addEventListener('click', () => {
    zoom = zoom > 0.1 ? zoom - 0.1 : 0.1;  // Disminuye el zoom, pero no menos de 0.1
    imgExpandida.style.transform = `scale(${zoom})`;  // Aplica el zoom
});

// Cerrar la imagen expandida si se hace clic fuera de ella
imagenExpandida.addEventListener('click', (e) => {
    if (e.target === imagenExpandida) {
        imagenExpandida.style.display = 'none';
    }
});
