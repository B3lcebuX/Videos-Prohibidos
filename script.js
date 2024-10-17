const users = JSON.parse(localStorage.getItem('users')) || {};

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Verificar si el nombre de usuario ya existe
    if (users[username]) {
        alert('El nombre de usuario ya está en uso. Por favor elige otro.');
        return;
    }

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Guardar el nuevo usuario
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro exitoso. Puedes iniciar sesión ahora.');
    
    // Mostrar la sección de inicio de sesión
    document.getElementById('registerSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('registerForm').reset();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Verificar la información
    if (users[loginUsername] && users[loginUsername] === loginPassword) {
        alert('Inicio de sesión exitoso.');
        // Aquí puedes redirigir o mostrar contenido protegido
    } else {
        alert('Nombre de usuario o contraseña incorrectos.');
    }
});
const users = JSON.parse(localStorage.getItem('users')) || {};

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Verificar si el nombre de usuario ya existe
    if (users[username]) {
        alert('El nombre de usuario ya está en uso. Por favor elige otro.');
        return;
    }

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Guardar el nuevo usuario
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro exitoso. Puedes iniciar sesión ahora.');

    // Mostrar la sección de inicio de sesión y ocultar la de registro
    document.getElementById('registerSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('registerForm').reset();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Verificar la información
    if (users[loginUsername] && users[loginUsername] === loginPassword) {
        alert('Inicio de sesión exitoso.');
        // Aquí puedes redirigir o mostrar contenido protegido
    } else {
        alert('Nombre de usuario o contraseña incorrectos.');
    }
});
