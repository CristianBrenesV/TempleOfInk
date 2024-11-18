document.getElementById('togglePassword1').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;

    // Cambiar la imagen de mostrar a ocultar
    const icon = type === 'password' ? '/media/show.png' : '/media/hide.png';
    this.src = icon;
    this.alt = type === 'password' ? 'Mostrar contraseña' : 'Ocultar contraseña';
});

document.getElementById('togglePassword2').addEventListener('click', function () {
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const type = confirmPasswordInput.type === 'password' ? 'text' : 'password';
    confirmPasswordInput.type = type;

    // Cambiar la imagen de mostrar a ocultar
    const icon = type === 'password' ? '/media/show.png' : '/media/hide.png';
    this.src = icon;
    this.alt = type === 'password' ? 'Mostrar contraseña' : 'Ocultar contraseña';
});
