const inputNombre = document.getElementById('txt-nombre');
const inputRaza = document.getElementById('txt-raza');
const selectServicio = document.getElementById('slt-servicio');
const selectComportamiento = document.getElementById('slt-comportamiento');
const selectCalificación = document.getElementById('slt-estrellas');
const btnCalificación = document.getElementById('btn-calificación');
const btnCancelar = document.getElementById('btn-cancelar');


const validar = () => {

    let error = false;

    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('input-error');
    } else {
        inputNombre.classList.remove('input-error');
    }

    if (inputRaza.value == '') {
        error = true;
        inputRaza.classList.add('input-error');
    } else {
        inputRaza.classList.remove('input-error');
    }

    if (selectServicio.value == '') {
        error = true;
        selectServicio.classList.add('input-error');
    } else {
        selectServicio.classList.remove('input-error');
    }

    if (selectComportamiento.value == '') {
        error = true;
        selectComportamiento.classList.add('input-error');
    } else {
        selectComportamiento.classList.remove('input-error');
    }

    if (selectCalificación.value == '') {
        error = true;
        selectCalificación.classList.add('input-error');
    } else {
        selectCalificación.classList.remove('input-error');
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
        'raza': inputRaza.value,
        'servicio': selectServicio.value,
        'comportamiento': selectComportamiento.value,
        'calificación': selectCalificación.value,
    };

    console.log(usuario);

    Swal.fire({
        'icon': 'success',
        'title': 'Datos ingresados correctamente',
        'text': 'A registrado la calificación de la mascota',
        'confirmButtonText': 'Entendido'
    });

};

btnCalificación.addEventListener('click', validar);

let refresh = document.getElementById('btn-cancelar');
refresh.addEventListener('click', _ => {
    location.reload();
})