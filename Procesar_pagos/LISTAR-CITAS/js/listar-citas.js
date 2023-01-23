const cuerpoTabla = document.querySelector('#tbl-perros tbody');
const tabla = document.getElementById('tbl-perros');

tabla.classList.add("ocultar");

const llenarTabla = () => {
    cuerpoTabla.innerHTML = '';
    perros.forEach(usuarioTemp => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().textContent = usuarioTemp.Nombredelcliente;
        fila.insertCell().textContent = usuarioTemp.Entrada;
        fila.insertCell().textContent = usuarioTemp.Salida;
        fila.insertCell().textContent = usuarioTemp.Médico;
        fila.insertCell().textContent = usuarioTemp.NombredeMascota;
        fila.insertCell().textContent = usuarioTemp.Raza;
        fila.insertCell().textContent = usuarioTemp.Serviciosmédicos;

        let tdAcciones = fila.insertCell();

        let btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.type = 'button';

        let btnDesactivar = document.createElement('button');
        btnDesactivar.textContent = 'Cancelar';
        btnDesactivar.type = 'button';

        btnEditar.classList.add('btn-editar'); //estilo a botones
        btnDesactivar.classList.add('btn-desactivar');

        tdAcciones.appendChild(btnEditar);
        tdAcciones.appendChild(btnDesactivar);

        btnDesactivar.addEventListener('click', () => {
            Swal.fire({
                title: '¿Esta seguro que desea cencelar esta cita?',
                text: "La acción no se puede revertir!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#58A082',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si , Borrela!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Borrado!',
                        'Su entrada fue eliminada.',
                        'Exito'
                    )
                }
            })
        })

    });

};




llenarTabla();

document.getElementById('btn-generar-reporte').addEventListener('click', () => {
    tabla.classList.remove('ocultar');
});

document.getElementById('btn-agregar').addEventListener('click', () => {
    window.location.href = 'https://www.google.com/';
});