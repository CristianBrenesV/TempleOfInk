document.querySelectorAll('.hora').forEach(hora => {
    hora.addEventListener('click', () => {
        // Desmarcar cualquier horario previamente seleccionado
        document.querySelectorAll('.hora').forEach(h => h.classList.remove('seleccionada'));

        // Marcar el horario actual como seleccionado
        hora.classList.add('seleccionada');
        console.log(`Hora seleccionada: ${hora.dataset.value}`);
    });
});

document.querySelectorAll('.dia').forEach(dia => {
    dia.addEventListener('click', () => {
        // Desmarcar cualquier día previamente seleccionado
        document.querySelectorAll('.dia').forEach(d => d.classList.remove('seleccionada'));

        // Marcar el día actual como seleccionado
        dia.classList.add('seleccionada');
        console.log(`Día seleccionado: ${dia.dataset.dia}`);
    });
});
