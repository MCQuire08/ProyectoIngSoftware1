const inputNombre = document.getElementById('txt-nombre');
const inputDirección = document.getElementById('txt-dirección');
const inputCiudad = document.getElementById('txt-ciudad');
const selectProvincia = document.getElementById('slt-provincia');
const inputNúmeroDeTarjeta = document.getElementById('txt-ndt');
const selectTarjeta = document.getElementById('slt-tarjeta');
const inputFechaDeVencimiento = document.getElementById('txt-fdv');
const inputCódigoDeSeguridad = document.getElementById('txt-cds');
const btnGuardar = document.getElementById('btn-guardar');
const btnCancelar = document.getElementById('btn-cancelar');

const validar = () => {

    let error = false;

    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('input-error');
    } else {
        inputNombre.classList.remove('input-error');
    }

    if (inputDirección.value == '') {
        error = true;
        inputDirección.classList.add('input-error');
    } else {
        inputDirección.classList.remove('input-error');
    }

    if (inputCiudad.value == '') {
        error = true;
        inputCiudad.classList.add('input-error');
    } else {
        inputCiudad.classList.remove('input-error');
    }

    if (selectProvincia.value == '') {
        error = true;
        selectProvincia.classList.add('input-error');
    } else {
        selectProvincia.classList.remove('input-error');
    }

    if (inputNúmeroDeTarjeta.value == '') {
        error = true;
        inputNúmeroDeTarjeta.classList.add('input-error');
    } else {
        inputNúmeroDeTarjeta.classList.remove('input-error');
    }

    if (selectTarjeta.value == '') {
        error = true;
        selectTarjeta.classList.add('input-error');
    } else {
        selectTarjeta.classList.remove('input-error');
    }

    if (inputFechaDeVencimiento.value == '') {
        error = true;
        inputFechaDeVencimiento.classList.add('input-error');
    } else {
        inputFechaDeVencimiento.classList.remove('input-error');
    }

    if (inputCódigoDeSeguridad.value == '') {
        error = true;
        inputCódigoDeSeguridad.classList.add('input-error');
    } else {
        inputCódigoDeSeguridad.classList.remove('input-error');
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    } else {
        obtenerDatos();
    }

};

const obtenerDatos = () => {
    let usuario = {
        'nombre': inputNombre.value,
        'dirección': inputDirección.value,
        'ciudad': inputCiudad.value,
        'provincia': selectProvincia.value,
        'número-de-tarjeta': inputNúmeroDeTarjeta.value,
        'fecha-de-vencimiento': inputFechaDeVencimiento.value,
        'código-de-seguridad': inputCódigoDeSeguridad.value,
        'tipo-de-tarjeta': selectTarjeta.value,
    };

    console.log(usuario);

    Swal.fire({
        'icon': 'success',
        'title': 'Datos ingresados correctamente',
        'text': 'A registrado el metodo de pago exitosamente',
        'confirmButtonText': 'Entendido'
    });

};

btnGuardar.addEventListener('click', validar);

let refresh = document.getElementById('btn-cancelar');
refresh.addEventListener('click', _ => {
    location.reload();
})