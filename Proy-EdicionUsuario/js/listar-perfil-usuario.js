function listar() {
    document.getElementById('nombreUsu').value = usuarios['nombre'];
    document.getElementById('apellidosUsu').value = usuarios['apellidos'];
    document.getElementById('correoUsu').value = usuarios['correo'];
    document.getElementById('numeroUsu').value = usuarios['celular'];
    document.getElementById('cedulaUsu').value = usuarios['cedula'];
    document.getElementById('direccionUsu').value = usuarios['direccion'];
    document.getElementById('generoUsu').value = usuarios['genero'];
}