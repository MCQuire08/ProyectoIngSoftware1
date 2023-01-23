// JavaScript Document
function validateForm(pFormulario) {
    let estatus = true;
    let msg = document.getElementById("msg");
    msg.innerHTML = "";
    if (pFormulario.pRaza.value == "") {
        msg.innerHTML = `${msg.innerHTML} - El campo de raza está vacío.<br/>`;
        pFormulario.pRaza.style = "border: 1px solid #ffc79f";
        estatus = false;
    } else {
        pFormulario.pRaza.style = "border: 1px solid green";
    }

    if (pFormulario.pComentario.value == "") {
        msg.innerHTML = `${msg.innerHTML} - El campo del comentario está vacío.<br/>`;
        pFormulario.pComentario.style = "border: 1px solid #ffc79f";
        estatus = false;
    } else {
        pFormulario.pComentario.style = "border: 1px solid green";
    }
    if (pFormulario.fechaEn.value == "") {
        msg.innerHTML = `${msg.innerHTML} - El campo de la fecha de Nacimiento está vacío.<br/>`;
        pFormulario.fechaEn.style = "border: 1px solid #ffc79f";
        estatus = false;
    } else {
        pFormulario.fechaEn.style = "border: 1px solid green";
    }
    if (pFormulario.fechaSa.value == "") {
        msg.innerHTML = `${msg.innerHTML} - El campo de fotografia está vacío.<br/>`;
        pFormulario.fechaSa.style = "border: 1px solid #ffc79f";
        estatus = false;
    } else {
        pFormulario.fechaSa.style = "border: 1px solid green";
    }

    if (estatus == false) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Existen campos inválidos o vacíos"
        })
    }
    return estatus;
}