// JavaScript Document
function validateForm(pFormulario) {
    let estatus = true;
    let msg = document.getElementById("msg");
    msg.innerHTML = "";
    if (pFormulario.pPago.value == "0") {
        msg.innerHTML = `${msg.innerHTML} - El campo de pago está vacío.<br/>`;
        pFormulario.pPago.style = "border: 1px solid red";
        estatus = false;
    } else {
        pFormulario.pPago.style = "border: 1px solid green";
    }

    if (pFormulario.pCvv.value == "") {
        msg.innerHTML = `${msg.innerHTML} - El campo de CVV está vacío.<br/>`;
        pFormulario.pCvv.style = "border: 1px solid red";
        estatus = false;
    } else {
        pFormulario.pCvv.style = "border: 1px solid green";
    }
    if (pFormulario.fechaEn.value == "") {
        msg.innerHTML = `${msg.innerHTML} - El campo de la fecha está vacío.<br/>`;
        pFormulario.fechaEn.style = "border: 1px solid red";
        estatus = false;
    } else {
        pFormulario.fechaEn.style = "border: 1px solid green";

    if (estatus == false) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Existen campos inválidos o vacíos"
        })
    }
    return estatus;
}