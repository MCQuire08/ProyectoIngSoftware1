const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');
const inputFiltro = document.getElementById('txt-filtro');

const llenarTabla = () => {
    cuerpoTabla.innerHTML = '';

    usuariosArreglo.forEach(usuarioTemp => {
        if (usuarioTemp.tipoDeUsuario.toLowerCase().includes(inputFiltro.value.toLowerCase()) || usuarioTemp.nombre.toLowerCase().includes(inputFiltro.value.toLowerCase()) || usuarioTemp.apellidos.toLowerCase().includes(inputFiltro.value.toLowerCase()) || usuarioTemp.cédula.toLowerCase().includes(inputFiltro.value.toLowerCase()) || usuarioTemp.teléfono.toLowerCase().includes(inputFiltro.value.toLowerCase()) || usuarioTemp.correoElectrónico.toLowerCase().includes(inputFiltro.value.toLowerCase()) || usuarioTemp.dirección.toLowerCase().includes(inputFiltro.value.toLowerCase()) || usuarioTemp.género.toLowerCase().includes(inputFiltro.value.toLowerCase())) {
            let fila = cuerpoTabla.insertRow();

            fila.insertCell().textContent = usuarioTemp.tipoDeUsuario;
            fila.insertCell().textContent = usuarioTemp.nombre;
            fila.insertCell().textContent = usuarioTemp.apellidos;
            fila.insertCell().textContent = usuarioTemp.cédula;
            fila.insertCell().textContent = usuarioTemp.teléfono;
            fila.insertCell().textContent = usuarioTemp.correoElectrónico;
            fila.insertCell().textContent = usuarioTemp.dirección;
            fila.insertCell().textContent = usuarioTemp.género;

            let tdAcciones = fila.insertCell();

            let btnEditar = document.createElement('button')
            btnEditar.textContent = 'Editar';
            btnEditar.type = 'button';
            btnEditar.classList.add('btn-editar');

            let btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.type = 'button';
            btnEliminar.classList.add('btn-eliminar');

            let btnDesactivar = document.createElement('button');
            btnDesactivar.textContent = 'Desactivar';
            btnDesactivar.type = 'button';
            btnDesactivar.classList.add('btn-desactivar');

            tdAcciones.appendChild(btnEditar);
            tdAcciones.appendChild(btnEliminar);
            tdAcciones.appendChild(btnDesactivar);

            btnEliminar.addEventListener('click', () => {
                Swal.fire({
                    title: '¿Esta seguro que desea eliminar a este usuario?',
                    text: "La accion no se puede revertir",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '¡Si, eliminar!',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '¡Registro eliminado!',
                            'El usuario fue borrado',
                            'success'
                        )
                    }
                })
            });

            btnEditar.addEventListener('click', () => {
                Swal.fire({
                    title: '¿Esta seguro que desea editar la informacion de este usuario?',
                    text: "La informacion editada se puede volver a editar en cualquier momento",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '¡Si, editar!',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '¡Información editada exitosamente!',
                            'La Información del usuario fue editada',
                            'success'
                        )
                    }
                })
            });
            btnDesactivar.addEventListener('click', () => {
                Swal.fire({
                    title: '¿Esta seguro que desea desactivar a este usuario?',
                    text: "El usuario desactivado se puede volver a activar en cualquier momento",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '¡Desactivar!',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '¡Usuario desactivado exitosamente!',
                            'success'
                        )
                    }
                })
            });
        }


    });
};

llenarTabla();

inputFiltro.addEventListener('keyup', llenarTabla);
document.getElementById('btn-agregar').addEventListener('click', () => {});