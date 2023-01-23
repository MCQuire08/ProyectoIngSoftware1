const inputnombremascota = document.getElementById('name-mascota');
const razamascota = document.getElementById('raza');
const requerimientosmascota = document.getElementById('requerimientos-mascota');
const fotomascota = document.getElementById('foto-mascota');
const btnguardar = document.getElementById('btnguardar');

const validacion = () => {
    let error = false;

    if (inputnombremascota.value == '') {
        error = true;
        inputnombremascota.classList.add('resaltar-rojo');
        Swal.fire({
            title: 'Error!',
            text: 'Tienes que llenar todos los espacios',
            icon: 'error',
        })
    } else {
        inputnombremascota.classList.remove('resaltar-rojo');
    }


    if (razamascota.value == '') {
        error = true;
        razamascota.classList.add('resaltar-rojo');
        Swal.fire({
            title: 'Error!',
            text: 'Tienes que llenar todos los espacios',
            icon: 'error',
        })
    } else {
        razamascota.classList.remove('resaltar-rojo');
    }



    if (requerimientosmascota.value == '') {
        error = true;
        requerimientosmascota.classList.add('resaltar-rojo');
        Swal.fire({
            title: 'Error!',
            text: 'Tienes que llenar todos los espacios',
            icon: 'error',
        })
    } else {
        requerimientosmascota.classList.remove('resaltar-rojo');
    }


    if (fotomascota.value == '') {
        error = true;
        fotomascota.classList.add('resaltar-rojo');
        Swal.fire({
            title: 'Error!',
            text: 'Tienes que llenar todos los espacios',
            icon: 'error',
        })
    } else {
        fotomascota.classList.remove('resaltar-rojo');
    };

};

btnguardar.addEventListener('click', validacion);