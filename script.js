document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Guardar la información en el almacenamiento local
    localStorage.setItem(username, password);
    alert('Registro exitoso. Puedes iniciar sesión ahora.');
    document.getElementById('registerForm').reset();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Verificar la información
    const storedPassword = localStorage.getItem(loginUsername);

    if (storedPassword && storedPassword === loginPassword) {
        alert('Inicio de sesión exitoso.');
        // Redirigir o mostrar contenido protegido aquí
    } else {
        alert('Nombre de usuario o contraseña incorrectos.');
    }
});
