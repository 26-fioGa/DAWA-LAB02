// Inputs variables
var nombres = document.getElementById("nombres");
var email = document.getElementById("email");
var telefono = document.getElementById("telefono");
var fecNacimiento = document.getElementById("fecNacimiento");
var mensaje = document.getElementById("mensaje");
var btnEnviar = document.getElementById("enviar");

// Alert Variables
var alertNombres = document.getElementById("alertNombres");
var alertEmail = document.getElementById("alertEmail");
var alertTelefono = document.getElementById("alertTelefono");
var alertFecNacimiento = document.getElementById("alertFecNacimiento");
var alertMensaje = document.getElementById("alertMensaje");
var alertSuccess = document.getElementById("alertSuccess");

// Variables regex -> email
expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

// Datos que reciben confirmación
var confirmaNombre = document.getElementById("recibeNombre")


function validar(e) {
    alertNombres.classList.add('d-none')
    alertEmail.classList.add('d-none')
    alertTelefono.classList.add('d-none')
    alertFecNacimiento.classList.add('d-none')
    alertMensaje.classList.add('d-none')

    if (nombres.value.length == 0 || !/(^$)|[a-zA-Z]/.test(nombres.value)) {
        alertNombres.classList.remove('d-none')
        e.preventDefault()
    } else if (email.value.length == 0 || !expr.test(email.value)) {
        alertEmail.classList.remove('d-none')
        e.preventDefault()
    } else if (telefono.value.length != 9 || /(^$)|[a-zA-Z]/.test(parseInt(telefono.value))) {
        alertTelefono.classList.remove('d-none')
        e.preventDefault()
    } else if (fecNacimiento.value.length == 0) {
        alertFecNacimiento.classList.remove('d-none')
        e.preventDefault()
    } else if (mensaje.value.length <= 150) {
        alertMensaje.classList.remove('d-none')
        e.preventDefault()
    } else {
        alertSuccess.classList.remove('d-none');
        // Enviamos data a la vista de confirmacion
        const nombresValue = nombres.value;
        const emailValue = email.value;
        const telefonoValue = telefono.value;
        const fecNacimientoValue = fecNacimiento.value;
        const mensajeValue = mensaje.value;

        localStorage.setItem("Nombres", nombresValue);
        localStorage.setItem("Email", emailValue);
        localStorage.setItem("Telefono", telefonoValue);
        localStorage.setItem("FechaNacimiento", fecNacimientoValue);
        localStorage.setItem("Mensaje", mensajeValue);

        return;
    }

}

btnEnviar.addEventListener("click", validar)