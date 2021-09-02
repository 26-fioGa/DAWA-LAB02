// Recibimos nombres de localStorage
const nombres = localStorage.getItem('Nombres')
const email = localStorage.getItem('Email')
const telefono = localStorage.getItem('Telefono')
const fechaNacimiento = localStorage.getItem('FechaNacimiento')
const mensaje = localStorage.getItem('Mensaje')


// Seteamos estos valores obtenidos en los componentes de HTML
document.getElementById('recibeNombre').innerHTML = nombres;
document.getElementById('recibeEmail').innerHTML = email;
document.getElementById('recibeTelefono').innerHTML = telefono;
document.getElementById('recibeFechaNacimiento').innerHTML = fechaNacimiento;
document.getElementById('recibeMensaje').value = mensaje;