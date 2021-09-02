// Recibimos valores del formulario
var nameServer = document.getElementById("nameServer");
var port = document.getElementById("port");
// Boton enviar
var btnCrear = document.getElementById("crear");
// Alerta de validación 
var alertPuerto = document.getElementById("alertPuerto");

function validar(e) {
    alertPuerto.classList.add('d-none');
    if (port.value.length != 4 || /(^$)|[a-zA-Z]/.test(parseInt(port.value))) {
        alertPuerto.classList.remove('d-none')
        alertPuerto.innerText = 'El puerto debe tener 4 dígitos y no debe incluir letras.'
        e.preventDefault()
    } else {
        console.log("Si entra a else");
        alertPuerto.classList.add('d-none');

        return;
    }
}
btnCrear.addEventListener("click", validar)