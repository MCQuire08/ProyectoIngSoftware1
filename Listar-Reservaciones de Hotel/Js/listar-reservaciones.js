const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');
const inputFiltro = document.getElementById('txt-filtro');

const llenarTabla = () => {
    cuerpoTabla.innerHTML = '';

    usuariosArreglo.forEach(usuarioTemp => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = usuarioTemp.Nombre;
        fila.insertCell().textContent = usuarioTemp.Apellido;
        fila.insertCell().textContent = usuarioTemp.Cedula;
        fila.insertCell().textContent = usuarioTemp.Direccion;
        fila.insertCell().textContent = usuarioTemp.Tipodehabitacion;
        fila.insertCell().textContent = usuarioTemp.Tipoderaza;
        fila.insertCell().textContent = usuarioTemp.Genero;
        fila.insertCell().textContent = usuarioTemp.Fecha;

        let tdAcciones = fila.insertCell();

        let btnEditar = document.createElement('button')
        btnEditar.textContent = 'Editar';
        btnEditar.type = 'button';
        btnEditar.classList.add('btn-editar');

        let btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.type = 'button';
        btnEliminar.classList.add('btn-eliminar');

        tdAcciones.appendChild(btnEditar);
        tdAcciones.appendChild(btnEliminar);

        btnEliminar.addEventListener('click', () => {
            Swal.fire({
                title: '¿Esta seguro que desea eliminar esta Reservacion?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Si, eliminar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        '¡Registro eliminado!',
                        'La Reservacion fue borrada con exito!',
                        'success'
                    )
                }
            })
        });

        btnEditar.addEventListener('click', () => {
            Swal.fire({
                title: '¿Esta seguro que desea editar la informacion de la Reservacion?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Si, editar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        '¡Información editada exitosamente!',
                        'La Información de la Reservacion fue editada!',
                        'success'
                    )
                }
            })
        });

    });

};

llenarTabla();

inputFiltro.addEventListener('keyup', llenarTabla);
document.getElementById('btn-agregar').addEventListener('click', () => {});